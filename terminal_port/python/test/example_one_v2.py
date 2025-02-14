import curses
import time
import os
from curses import wrapper

class EnhancedUIDemo:
    def __init__(self, stdscr):
        self.stdscr = stdscr
        self.setup_colors()
        
        # Get maximum screen dimensions
        self.max_y, self.max_x = stdscr.getmaxyx()
        
        # Create windows for different UI components
        self.menu_win = curses.newwin(self.max_y - 4, 20, 0, 0)
        self.content_win = curses.newwin(self.max_y - 4, self.max_x - 21, 0, 21)
        self.status_win = curses.newwin(3, self.max_x, self.max_y - 3, 0)
        
        # Initialize state
        self.selected_menu_idx = 0
        self.progress = 0
        self.status_message = "Welcome to Enhanced UI Demo!"
        self.content_text = []
        self.current_path = os.path.expanduser("~")  # Start in home directory
        self.file_list = []
        self.file_list_pos = 0
        self.preview_content = []
        self.preview_offset = 0
        self.active_panel = "menu"  # Can be "menu" or "content"
        self.current_mode = "progress"  # Can be "progress", "content", "files", "preview"
        self.show_preview = False    # Toggle for preview pane
        
        # File preview settings
        self.previewable_extensions = {
            '.txt', '.py', '.js', '.html', '.css', '.json', '.md', '.yml',
            '.yaml', '.ini', '.conf', '.sh', '.bash', '.java', '.cpp', '.c',
            '.h', '.hpp', '.rs', '.go', '.rb', '.pl', '.php', '.xml'
        }
        
    def setup_colors(self):
        """Initialize color pairs"""
        curses.start_color()
        curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)   # Menu highlight
        curses.init_pair(2, curses.COLOR_YELLOW, curses.COLOR_BLACK)  # Status
        curses.init_pair(3, curses.COLOR_CYAN, curses.COLOR_BLACK)    # Progress bar
        curses.init_pair(4, curses.COLOR_BLUE, curses.COLOR_BLACK)    # Files
        curses.init_pair(5, curses.COLOR_MAGENTA, curses.COLOR_BLACK) # Preview
        
    def display_menu(self):
        """Display the menu with the current selection"""
        self.menu_win.box()
        menu_items = ["Show Progress", "Text Editor", "File Explorer", "Exit"]
        
        # Draw menu title
        title = "[ Menu ]"
        self.menu_win.addstr(0, (20 - len(title)) // 2, title)
        
        for idx, item in enumerate(menu_items):
            x = 2
            y = 2 + idx
            item_style = curses.color_pair(1) | curses.A_BOLD if self.active_panel == "menu" else curses.A_NORMAL
            
            if idx == self.selected_menu_idx:
                self.menu_win.attron(item_style)
                self.menu_win.addstr(y, x, f"> {item}")
                self.menu_win.attroff(item_style)
            else:
                self.menu_win.addstr(y, x, f"  {item}")
        
        self.menu_win.refresh()
        
    def display_content(self):
        """Display the main content area based on current mode"""
        self.content_win.box()
        
        # Draw content title based on mode
        title = f"[ {self.current_mode.title()} ]"
        self.content_win.addstr(0, (self.max_x - 23) // 2, title)
        
        if self.current_mode == "progress":
            self.draw_progress_bar()
        elif self.current_mode == "content":
            self.draw_text_editor()
        elif self.current_mode == "files":
            self.draw_file_explorer()
            
        self.content_win.refresh()
        
    def draw_progress_bar(self):
        """Draw a progress bar in the content window"""
        bar_width = self.max_x - 45
        filled = int(bar_width * self.progress / 100)
        
        self.content_win.attron(curses.color_pair(3))
        self.content_win.addstr(2, 2, f"Progress: [{('=' * filled) + (' ' * (bar_width - filled))}] {self.progress}%")
        self.content_win.attroff(curses.color_pair(3))
        
    def draw_text_editor(self):
        """Display text editor content"""
        for idx, line in enumerate(self.content_text[-self.max_y+8:]):
            if idx >= self.max_y - 8:
                break
            style = curses.color_pair(1) if self.active_panel == "content" else curses.A_NORMAL
            self.content_win.addstr(idx + 1, 2, line[:self.max_x-24], style)
            
    def draw_file_explorer(self):
        """Display file explorer with preview"""
        if not self.file_list:
            self.refresh_file_list()
            
        # Calculate dimensions for split view
        explorer_width = (self.max_x - 23) // 2
        preview_start = explorer_width + 3
        
        # Draw vertical separator
        for y in range(1, self.max_y - 5):
            self.content_win.addch(y, explorer_width + 1, '│')
            
        # Draw files
        for idx, file in enumerate(self.file_list[self.file_list_pos:]):
            if idx >= self.max_y - 7:
                break
                
            style = curses.A_NORMAL
            prefix = "  "
            
            if os.path.isdir(os.path.join(self.current_path, file)):
                style |= curses.color_pair(4)
                prefix = "📁 "
            else:
                prefix = "📄 "
                
            if idx == self.file_list_pos and self.active_panel == "content":
                style |= curses.A_REVERSE
                
            display = f"{prefix}{file}"
            if len(display) > explorer_width - 3:
                display = display[:explorer_width-6] + "..."
                
            self.content_win.addstr(idx + 1, 2, display, style)
            
        # Draw preview if applicable
        if self.active_panel == "content" and self.file_list:
            current_file = self.file_list[self.file_list_pos]
            file_path = os.path.join(self.current_path, current_file)
            
            if os.path.isfile(file_path) and self.can_preview(current_file):
                if not self.preview_content:
                    self.load_preview(file_path)
                    
                for idx, line in enumerate(self.preview_content[self.preview_offset:]):
                    if idx >= self.max_y - 7:
                        break
                    try:
                        self.content_win.addstr(idx + 1, preview_start, 
                                              line[:explorer_width-2], 
                                              curses.color_pair(5))
                    except curses.error:
                        pass
                        
    def can_preview(self, filename):
        """Check if file can be previewed"""
        return any(filename.lower().endswith(ext) for ext in self.previewable_extensions)
        
    def load_preview(self, filepath):
        """Load preview content for a file"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                self.preview_content = [line.rstrip() for line in f.readlines()]
            self.preview_offset = 0
        except Exception:
            self.preview_content = ["Unable to preview file content"]
            
    def refresh_file_list(self):
        """Refresh the current directory file list"""
        try:
            self.file_list = sorted(os.listdir(self.current_path))
        except PermissionError:
            self.file_list = []
            self.update_status("Permission denied")
            
    def update_status(self, message):
        """Update the status bar with a message"""
        self.status_message = message
        self.status_win.clear()
        self.status_win.box()
        
        self.status_win.attron(curses.color_pair(2))
        self.status_win.addstr(1, 2, message[:self.max_x-4])
        self.status_win.attroff(curses.color_pair(2))
        
        # Display context-sensitive help
        if self.active_panel == "menu":
            help_text = "↑/↓: Navigate | Enter: Select | Tab: Switch Panel"
        else:
            if self.current_mode == "files":
                help_text = "↑/↓: Navigate | Enter: Open | Tab: Switch Panel | Esc: Back"
            else:
                help_text = "Tab: Switch Panel | Esc: Back"
                
        if len(help_text) + 2 < self.max_x:
            self.status_win.addstr(1, self.max_x - len(help_text) - 2, help_text)
            
        self.status_win.refresh()
        
    def reset_content_state(self):
        """Reset the state of the content panel"""
        self.progress = 0
        self.content_text = []
        self.file_list = []
        self.file_list_pos = 0
        self.preview_content = []
        self.preview_offset = 0
        self.show_preview = False
        
    def handle_input(self, key):
        """Handle user input based on active panel and mode"""
        if key == ord('\t'):  # Tab key
            self.active_panel = "content" if self.active_panel == "menu" else "menu"
            if self.active_panel == "menu":
                self.reset_content_state()
            return True
            
        if key == 27:  # Escape key
            if self.active_panel == "content":
                self.active_panel = "menu"
                self.reset_content_state()
                return True
                
        if self.active_panel == "menu":
            return self.handle_menu_input(key)
        else:
            return self.handle_content_input(key)
            
    def handle_menu_input(self, key):
        """Handle input when menu is active"""
        if key == curses.KEY_UP and self.selected_menu_idx > 0:
            self.selected_menu_idx -= 1
        elif key == curses.KEY_DOWN and self.selected_menu_idx < 3:
            self.selected_menu_idx += 1
        elif key == 10:  # Enter key
            if self.selected_menu_idx == 0:
                self.current_mode = "progress"
                self.active_panel = "content"
            elif self.selected_menu_idx == 1:
                self.current_mode = "content"
                self.active_panel = "content"
            elif self.selected_menu_idx == 2:
                self.current_mode = "files"
                self.active_panel = "content"
                self.refresh_file_list()
            elif self.selected_menu_idx == 3:
                return False
        return True
        
    def handle_content_input(self, key):
        """Handle input when content panel is active"""
        if self.current_mode == "progress":
            if key == 10:  # Enter
                self.simulate_progress()
                
        elif self.current_mode == "content":
            if key == 10:  # Enter
                self.add_content()
                
        elif self.current_mode == "files":
            if key == curses.KEY_UP and self.file_list_pos > 0:
                self.file_list_pos -= 1
                self.preview_content = []
            elif key == curses.KEY_DOWN and self.file_list_pos < len(self.file_list) - 1:
                self.file_list_pos += 1
                self.preview_content = []
            elif key == ord('p'):  # Toggle preview
                self.show_preview = not self.show_preview
                self.preview_content = []
            elif key == ord('b'):  # Go back to parent directory
                parent = os.path.dirname(self.current_path)
                if os.path.exists(parent):
                    self.current_path = parent
                    self.refresh_file_list()
                    self.file_list_pos = 0
                    self.preview_content = []
            elif key == ord('~'):  # Go to home directory
                self.current_path = os.path.expanduser("~")
                self.refresh_file_list()
                self.file_list_pos = 0
                self.preview_content = []
            elif key == ord('/'):  # Go to root directory
                self.current_path = "/"
                self.refresh_file_list()
                self.file_list_pos = 0
                self.preview_content = []
            elif key == 10:  # Enter
                if self.file_list:
                    current_file = self.file_list[self.file_list_pos]
                    full_path = os.path.join(self.current_path, current_file)
                    if os.path.isdir(full_path):
                        try:
                            self.current_path = full_path
                            self.refresh_file_list()
                            self.file_list_pos = 0
                            self.preview_content = []
                        except PermissionError:
                            self.update_status("Permission denied")
                            
        return True
        
    def simulate_progress(self):
        """Simulate a progress bar filling up"""
        self.progress = 0
        while self.progress < 100:
            self.progress += 5
            self.display_content()
            self.update_status(f"Processing... {self.progress}%")
            time.sleep(0.1)
        self.update_status("Process complete!")
        
    def add_content(self):
        """Add some sample content to the content window"""
        new_content = f"Content Line {len(self.content_text) + 1}"
        self.content_text.append(new_content)
        self.update_status(f"Added: {new_content}")

    def run(self):
        """Main application loop"""
        running = True
        while running:
            # Display all UI components
            self.display_menu()
            self.display_content()
            self.update_status(self.status_message)
            
            # Handle input
            key = self.stdscr.getch()
            if key == ord('q'):
                break
                
            running = self.handle_input(key)

def main(stdscr):
    curses.curs_set(0)  # Hide cursor
    stdscr.clear()
    app = EnhancedUIDemo(stdscr)
    app.run()

if __name__ == "__main__":
    wrapper(main) 
