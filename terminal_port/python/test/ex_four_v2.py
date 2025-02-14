import curses
from curses import wrapper
import os
import time
import shutil
from pathlib import Path

class FileExplorerTUI:
    def __init__(self, stdscr):
        self.stdscr = stdscr
        self.setup_screen()
        self.current_path = os.getcwd()
        self.current_index = 0
        self.scroll_offset = 0
        self.preview_offset = 0
        self.selected_files = set()
        self.history = [self.current_path]
        self.history_pos = 0
        self.show_hidden = False
        self.show_preview = False
        self.preview_content = []
        
        # File types that can be previewed
        self.previewable_extensions = {
            '.txt', '.py', '.js', '.html', '.css', '.json', '.md', '.yml',
            '.yaml', '.ini', '.conf', '.sh', '.bash', '.java', '.cpp', '.c',
            '.h', '.hpp', '.rs', '.go', '.rb', '.pl', '.php', '.xml'
        }
        
    def setup_screen(self):
        """Initialize color pairs and screen settings"""
        curses.start_color()
        curses.init_pair(1, curses.COLOR_BLUE, curses.COLOR_BLACK)     # Directories
        curses.init_pair(2, curses.COLOR_GREEN, curses.COLOR_BLACK)    # Selected files
        curses.init_pair(3, curses.COLOR_YELLOW, curses.COLOR_BLACK)   # Current item
        curses.init_pair(4, curses.COLOR_RED, curses.COLOR_BLACK)      # Error messages
        curses.init_pair(5, curses.COLOR_CYAN, curses.COLOR_BLACK)     # Preview text
        curses.curs_set(0)  # Hide cursor
        self.max_y, self.max_x = self.stdscr.getmaxyx()

    def can_preview(self, filename):
        """Check if file can be previewed"""
        return any(filename.lower().endswith(ext) for ext in self.previewable_extensions)

    def load_preview(self, filepath):
        """Load preview content for a file"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.readlines()
            self.preview_content = [line.rstrip() for line in content]
            self.preview_offset = 0
        except Exception:
            self.preview_content = ["Unable to preview file content"]

    def draw_preview(self, start_x):
        """Draw the preview pane"""
        if not self.show_preview:
            return

        # Draw preview border
        preview_width = self.max_x - start_x - 1
        for y in range(2, self.max_y - 2):
            try:
                self.stdscr.addch(y, start_x - 1, '│')
            except curses.error:
                pass

        # Get current file
        contents = self.get_directory_contents()
        if contents and self.current_index < len(contents):
            current_file = contents[self.current_index]
            filepath = os.path.join(self.current_path, current_file)
            
            if os.path.isfile(filepath) and self.can_preview(current_file):
                # Load preview if not already loaded
                if not self.preview_content or filepath != getattr(self, '_last_preview_file', None):
                    self.load_preview(filepath)
                    self._last_preview_file = filepath

                # Draw preview content
                preview_height = self.max_y - 4
                for idx, line in enumerate(self.preview_content[self.preview_offset:], start=2):
                    if idx >= self.max_y - 2:
                        break
                    try:
                        # Truncate line if needed
                        display_line = line[:preview_width-2]
                        self.stdscr.addstr(idx, start_x, display_line, curses.color_pair(5))
                    except curses.error:
                        pass

                # Draw scroll indicators
                if self.preview_offset > 0:
                    try:
                        self.stdscr.addstr(2, self.max_x-2, "↑", curses.color_pair(5))
                    except curses.error:
                        pass
                if len(self.preview_content) - self.preview_offset > preview_height:
                    try:
                        self.stdscr.addstr(self.max_y-3, self.max_x-2, "↓", curses.color_pair(5))
                    except curses.error:
                        pass
            else:
                try:
                    if os.path.isdir(filepath):
                        self.stdscr.addstr(2, start_x, " Directory preview not available ", curses.color_pair(4))
                    else:
                        self.stdscr.addstr(2, start_x, " Preview not available for this file type ", curses.color_pair(4))
                except curses.error:
                    pass

    def get_directory_contents(self):
        """Get sorted list of directory contents"""
        try:
            contents = os.listdir(self.current_path)
            if not self.show_hidden:
                contents = [f for f in contents if not f.startswith('.')]
            contents.sort(key=lambda x: (
                not os.path.isdir(os.path.join(self.current_path, x)),
                x.lower()
            ))
            return contents
        except (PermissionError, FileNotFoundError):
            return []

    def draw_screen(self):
        """Draw the file explorer interface"""
        self.stdscr.clear()
        
        # Calculate dimensions based on preview state
        file_list_width = self.max_x - 1 if not self.show_preview else self.max_x // 2
        
        # Draw path bar
        path_display = f" 📂 {self.current_path}"
        try:
            self.stdscr.addstr(0, 0, path_display[:self.max_x-1], curses.A_BOLD)
        except curses.error:
            pass
            
        # Draw column headers
        try:
            header = " Name" + " " * (file_list_width - 34) + "Size     Modified"
            self.stdscr.addstr(1, 0, header[:file_list_width-1], curses.A_REVERSE)
        except curses.error:
            pass

        # Draw files and directories
        contents = self.get_directory_contents()
        display_range = self.max_y - 4

        # Draw file list
        for idx, item in enumerate(contents[self.scroll_offset:], start=2):
            if idx >= self.max_y - 2:
                break
                
            full_path = os.path.join(self.current_path, item)
            is_dir = os.path.isdir(full_path)
            
            # Prepare display string
            icon = "📁 " if is_dir else "📄 "
            file_info = self.get_file_info(item)
            display = f"{icon}{item}"
            
            # Truncate if necessary
            max_name_length = file_list_width - 35
            if len(display) > max_name_length:
                display = display[:max_name_length-3] + "..."
            
            # Add padding
            display = display.ljust(max_name_length)
            
            # Calculate attributes
            attr = curses.A_NORMAL
            if is_dir:
                attr |= curses.color_pair(1)
            if item in self.selected_files:
                attr |= curses.color_pair(2)
            if idx - 2 + self.scroll_offset == self.current_index:
                attr |= curses.color_pair(3) | curses.A_BOLD
            
            try:
                # Draw filename
                self.stdscr.addstr(idx, 0, display, attr)
                # Draw file info
                info_x = min(file_list_width - 24, self.max_x - 24)
                self.stdscr.addstr(idx, info_x, file_info[:24])
            except curses.error:
                pass

        # Draw preview pane if enabled
        if self.show_preview:
            self.draw_preview(file_list_width + 1)

        # Draw status bar
        status = " space: Select | p: Preview | ↑↓: Scroll | PgUp/PgDn: Preview Scroll | q: Quit "
        try:
            self.stdscr.addstr(self.max_y-2, 0, status.center(self.max_x-1, "-"), curses.A_REVERSE)
        except curses.error:
            pass

        self.stdscr.refresh()

    def get_file_info(self, filename):
        """Get formatted file information"""
        try:
            path = os.path.join(self.current_path, filename)
            stats = os.stat(path)
            size = stats.st_size
            mtime = time.strftime('%Y-%m-%d %H:%M', time.localtime(stats.st_mtime))
            
            if size < 1024:
                size_str = f"{size}B"
            elif size < 1024 * 1024:
                size_str = f"{size/1024:.1f}K"
            else:
                size_str = f"{size/(1024*1024):.1f}M"
                
            return f"{size_str:>8} {mtime}"
        except (OSError, FileNotFoundError):
            return " " * 24

    def handle_input(self, key):
        """Handle user input"""
        contents = self.get_directory_contents()
        
        if key == ord('q'):
            return False
            
        elif key == ord('p'):
            self.show_preview = not self.show_preview
            self.preview_offset = 0
            self.preview_content = []
            
        elif key == curses.KEY_UP or key == ord('k'):
            self.current_index = max(0, self.current_index - 1)
            
        elif key == curses.KEY_DOWN or key == ord('j'):
            self.current_index = min(len(contents) - 1, self.current_index + 1)
            
        elif key == curses.KEY_NPAGE:  # Page Down
            if self.show_preview:
                preview_height = self.max_y - 4
                self.preview_offset = min(
                    len(self.preview_content) - preview_height,
                    self.preview_offset + preview_height
                )
                
        elif key == curses.KEY_PPAGE:  # Page Up
            if self.show_preview:
                preview_height = self.max_y - 4
                self.preview_offset = max(0, self.preview_offset - preview_height)
                
        return True

    def run(self):
        """Main application loop"""
        running = True
        while running:
            self.max_y, self.max_x = self.stdscr.getmaxyx()
            self.draw_screen()
            key = self.stdscr.getch()
            running = self.handle_input(key)

def main(stdscr):
    app = FileExplorerTUI(stdscr)
    app.run()

if __name__ == "__main__":
    wrapper(main)
