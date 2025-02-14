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
        self.selected_files = set()
        self.history = [self.current_path]
        self.history_pos = 0
        self.show_hidden = False
        
    def setup_screen(self):
        """Initialize color pairs and screen settings"""
        curses.start_color()
        curses.init_pair(1, curses.COLOR_BLUE, curses.COLOR_BLACK)     # Directories
        curses.init_pair(2, curses.COLOR_GREEN, curses.COLOR_BLACK)    # Selected files
        curses.init_pair(3, curses.COLOR_YELLOW, curses.COLOR_BLACK)   # Current item
        curses.init_pair(4, curses.COLOR_RED, curses.COLOR_BLACK)      # Error messages
        curses.curs_set(0)  # Hide cursor
        self.max_y, self.max_x = self.stdscr.getmaxyx()

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

    def get_file_info(self, filename):
        """Get formatted file information"""
        try:
            path = os.path.join(self.current_path, filename)
            stats = os.stat(path)
            size = stats.st_size
            mtime = time.strftime('%Y-%m-%d %H:%M', time.localtime(stats.st_mtime))
            
            # Format size
            if size < 1024:
                size_str = f"{size}B"
            elif size < 1024 * 1024:
                size_str = f"{size/1024:.1f}K"
            else:
                size_str = f"{size/(1024*1024):.1f}M"
                
            return f"{size_str:>8} {mtime}"
        except (OSError, FileNotFoundError):
            return " " * 24

    def draw_screen(self):
        """Draw the file explorer interface"""
        self.stdscr.clear()
        
        # Draw path bar
        path_display = f" 📂 {self.current_path}"
        try:
            self.stdscr.addstr(0, 0, path_display[:self.max_x-1], curses.A_BOLD)
        except curses.error:
            pass
            
        # Draw column headers
        try:
            header = " Name" + " " * (self.max_x - 34) + "Size     Modified"
            self.stdscr.addstr(1, 0, header[:self.max_x-1], curses.A_REVERSE)
        except curses.error:
            pass

        # Get directory contents
        contents = self.get_directory_contents()
        display_range = self.max_y - 4  # Reserve space for header and footer
        
        # Adjust scroll if needed
        if self.current_index >= self.scroll_offset + display_range:
            self.scroll_offset = self.current_index - display_range + 1
        elif self.current_index < self.scroll_offset:
            self.scroll_offset = self.current_index

        # Draw files and directories
        for idx, item in enumerate(contents[self.scroll_offset:], start=2):
            if idx >= self.max_y - 2:  # Leave space for status bar
                break
                
            full_path = os.path.join(self.current_path, item)
            is_dir = os.path.isdir(full_path)
            
            # Prepare display string
            icon = "📁 " if is_dir else "📄 "
            file_info = self.get_file_info(item)
            display = f"{icon}{item}"
            
            # Truncate if necessary
            max_name_length = self.max_x - 35  # Leave space for size and date
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
                if idx - 2 + self.scroll_offset == self.current_index:
                    self.stdscr.addstr(idx, self.max_x - 24, file_info, attr)
                else:
                    self.stdscr.addstr(idx, self.max_x - 24, file_info)
            except curses.error:
                pass

        # Draw scroll indicators
        if self.scroll_offset > 0:
            try:
                self.stdscr.addstr(1, self.max_x-1, "↑")
            except curses.error:
                pass
        if len(contents) - self.scroll_offset > display_range:
            try:
                self.stdscr.addstr(self.max_y-3, self.max_x-1, "↓")
            except curses.error:
                pass

        # Draw status bar
        status = " space: Select | c: Copy | m: Move | d: Delete | .: Show Hidden | h: Help | q: Quit "
        try:
            self.stdscr.addstr(self.max_y-2, 0, status.center(self.max_x-1, "-"), curses.A_REVERSE)
        except curses.error:
            pass

        self.stdscr.refresh()

    def handle_input(self, key):
        """Handle user input"""
        contents = self.get_directory_contents()
        
        if key == ord('q'):
            return False
            
        elif key == curses.KEY_UP or key == ord('k'):
            self.current_index = max(0, self.current_index - 1)
            
        elif key == curses.KEY_DOWN or key == ord('j'):
            self.current_index = min(len(contents) - 1, self.current_index + 1)
            
        elif key == curses.KEY_RIGHT or key == ord('l'):
            if contents and self.current_index < len(contents):
                item = contents[self.current_index]
                full_path = os.path.join(self.current_path, item)
                if os.path.isdir(full_path):
                    try:
                        self.current_path = full_path
                        self.history = self.history[:self.history_pos + 1]
                        self.history.append(self.current_path)
                        self.history_pos = len(self.history) - 1
                        self.current_index = 0
                        self.scroll_offset = 0
                    except PermissionError:
                        pass
                        
        elif key == curses.KEY_LEFT or key == ord('h'):
            if self.history_pos > 0:
                self.history_pos -= 1
                self.current_path = self.history[self.history_pos]
                self.current_index = 0
                self.scroll_offset = 0
                
        elif key == ord('\t'):  # Tab key for forward history
            if self.history_pos < len(self.history) - 1:
                self.history_pos += 1
                self.current_path = self.history[self.history_pos]
                self.current_index = 0
                self.scroll_offset = 0
                
        elif key == ord(' '):
            if contents and self.current_index < len(contents):
                item = contents[self.current_index]
                if item in self.selected_files:
                    self.selected_files.remove(item)
                else:
                    self.selected_files.add(item)
                    
        elif key == ord('.'):
            self.show_hidden = not self.show_hidden
            self.current_index = 0
            self.scroll_offset = 0
            
        return True

    def run(self):
        """Main application loop"""
        running = True
        while running:
            # Update screen dimensions in case of resize
            self.max_y, self.max_x = self.stdscr.getmaxyx()
            self.draw_screen()
            key = self.stdscr.getch()
            running = self.handle_input(key)

def main(stdscr):
    app = FileExplorerTUI(stdscr)
    app.run()

if __name__ == "__main__":
    wrapper(main)
