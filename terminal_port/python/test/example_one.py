import curses
import time
from curses import wrapper

class UIDemo:
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
        self.status_message = "Welcome to Curses UI Demo!"
        self.content_text = []
        
    def setup_colors(self):
        """Initialize color pairs"""
        curses.start_color()
        curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)  # Menu highlight
        curses.init_pair(2, curses.COLOR_YELLOW, curses.COLOR_BLACK)  # Status
        curses.init_pair(3, curses.COLOR_CYAN, curses.COLOR_BLACK)  # Progress bar
        
    def display_menu(self):
        """Display the menu with the current selection"""
        self.menu_win.box()
        menu_items = ["Show Progress", "Add Content", "Clear Content", "Exit"]
        
        for idx, item in enumerate(menu_items):
            x = 2
            y = 2 + idx
            if idx == self.selected_menu_idx:
                self.menu_win.attron(curses.color_pair(1) | curses.A_BOLD)
                self.menu_win.addstr(y, x, f"> {item}")
                self.menu_win.attroff(curses.color_pair(1) | curses.A_BOLD)
            else:
                self.menu_win.addstr(y, x, f"  {item}")
        
        self.menu_win.refresh()
        
    def display_content(self):
        """Display the main content area"""
        self.content_win.box()
        
        # Display content text
        for idx, line in enumerate(self.content_text[-self.max_y+6:]):  # Leave room for borders
            if idx >= self.max_y - 6:  # Prevent overflow
                break
            self.content_win.addstr(idx + 1, 2, line[:self.max_x-24])  # Leave room for borders
            
        self.content_win.refresh()
        
    def draw_progress_bar(self):
        """Draw a progress bar in the content window"""
        self.content_win.clear()
        self.content_win.box()
        
        bar_width = self.max_x - 35  # Leave room for borders and text
        filled = int(bar_width * self.progress / 100)
        
        self.content_win.attron(curses.color_pair(3))
        self.content_win.addstr(2, 2, f"Progress: [{('=' * filled) + (' ' * (bar_width - filled))}] {self.progress}%")
        self.content_win.attroff(curses.color_pair(3))
        
        self.content_win.refresh()
        
    def update_status(self, message):
        """Update the status bar with a message"""
        self.status_message = message
        self.status_win.clear()
        self.status_win.box()
        
        # Display status message with color
        self.status_win.attron(curses.color_pair(2))
        self.status_win.addstr(1, 2, message[:self.max_x-4])  # Prevent overflow
        self.status_win.attroff(curses.color_pair(2))
        
        # Display help text
        help_text = "↑/↓: Navigate | Enter: Select | q: Quit"
        if len(help_text) + 2 < self.max_x:
            self.status_win.addstr(1, self.max_x - len(help_text) - 2, help_text)
            
        self.status_win.refresh()
        
    def simulate_progress(self):
        """Simulate a progress bar filling up"""
        self.progress = 0
        while self.progress < 100:
            self.progress += 5
            self.draw_progress_bar()
            self.update_status(f"Processing... {self.progress}%")
            time.sleep(0.1)
        self.update_status("Process complete!")
        
    def add_content(self):
        """Add some sample content to the content window"""
        new_content = f"Content Line {len(self.content_text) + 1}"
        self.content_text.append(new_content)
        self.update_status(f"Added: {new_content}")
        
    def clear_content(self):
        """Clear all content"""
        self.content_text = []
        self.content_win.clear()
        self.content_win.box()
        self.content_win.refresh()
        self.update_status("Content cleared")
        
    def handle_input(self, key):
        """Handle user input"""
        if key == curses.KEY_UP and self.selected_menu_idx > 0:
            self.selected_menu_idx -= 1
        elif key == curses.KEY_DOWN and self.selected_menu_idx < 3:
            self.selected_menu_idx += 1
        elif key == 10:  # Enter key
            if self.selected_menu_idx == 0:
                self.simulate_progress()
            elif self.selected_menu_idx == 1:
                self.add_content()
            elif self.selected_menu_idx == 2:
                self.clear_content()
            elif self.selected_menu_idx == 3:
                return False
        return True

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
    # Basic curses setup
    curses.curs_set(0)  # Hide cursor
    stdscr.clear()
    
    # Create and run the demo
    app = UIDemo(stdscr)
    app.run()

# Run the application
if __name__ == "__main__":
    wrapper(main)
