import curses
import time
from curses import wrapper
import random

class PortfolioApp:
    def __init__(self, stdscr):
        self.screen = stdscr
        curses.start_color()
        curses.use_default_colors()
        # Initialize color pairs
        curses.init_pair(1, curses.COLOR_GREEN, -1)
        curses.init_pair(2, curses.COLOR_CYAN, -1)
        curses.init_pair(3, curses.COLOR_YELLOW, -1)
        curses.init_pair(4, curses.COLOR_MAGENTA, -1)
        
        self.GREEN = curses.color_pair(1)
        self.CYAN = curses.color_pair(2)
        self.YELLOW = curses.color_pair(3)
        self.MAGENTA = curses.color_pair(4)
        
        # Hide cursor
        curses.curs_set(0)
        self.screen.keypad(1)
        
        # Portfolio sections
        self.sections = {
            'About': self.show_about,
            'Projects': self.show_projects,
            'Skills': self.show_skills,
            'Contact': self.show_contact,
            'Easter Egg': self.show_easter_egg
        }
        
        self.current_selection = 0
        self.matrix_chars = [chr(i) for i in range(33, 127)]
        self.rain_drops = []

    def draw_menu(self):
        h, w = self.screen.getmaxyx()
        self.screen.clear()
        
        # Draw ASCII art header
        header = [
            "╔══════════════════════════════════════╗",
            "║     WELCOME TO MY TERMINAL PORT      ║",
            "╚══════════════════════════════════════╝"
        ]
        
        for idx, line in enumerate(header):
            self.screen.addstr(idx + 2, (w - len(line)) // 2, line, self.GREEN)
        
        # Draw menu items
        for idx, section in enumerate(self.sections.keys()):
            x = w // 2 - len(section) // 2
            y = h // 2 - len(self.sections) // 2 + idx
            
            if idx == self.current_selection:
                self.screen.addstr(y, x - 2, "> ", self.YELLOW)
                self.screen.addstr(y, x, section, self.YELLOW | curses.A_BOLD)
                self.screen.addstr(y, x + len(section), " <", self.YELLOW)
            else:
                self.screen.addstr(y, x, section, self.CYAN)

        # Draw footer
        footer = "Use ↑↓ to navigate, Enter to select, 'q' to quit"
        self.screen.addstr(h-2, (w - len(footer)) // 2, footer, self.MAGENTA)
        
        self.screen.refresh()

    def show_about(self):
        self.screen.clear()
        about_text = [
            "About Me",
            "========",
            "",
            "Hey! I'm [Your Name]",
            "A passionate developer who loves creating unique experiences.",
            "",
            "My journey began with...",
            "",
            "What drives me:",
            "• Innovation through code",
            "• Creating memorable user experiences",
            "• Solving complex problems",
            "",
            "[Press any key to return]"
        ]
        
        self.animate_text(about_text)
        self.screen.getch()

    def show_projects(self):
        projects = [
            ("Project Alpha", "A revolutionary AI-powered tool"),
            ("Project Beta", "Real-time data visualization"),
            ("Project Gamma", "Blockchain implementation"),
        ]
        
        self.screen.clear()
        h, w = self.screen.getmaxyx()
        
        # Animated project cards
        for idx, (name, desc) in enumerate(projects):
            y_pos = 5 + idx * 4
            # Draw card border with animation
            for x in range(w//4, (w*3)//4):
                self.screen.addstr(y_pos, x, "─", self.GREEN)
                self.screen.addstr(y_pos + 3, x, "─", self.GREEN)
                self.screen.refresh()
                time.sleep(0.001)
            
            self.screen.addstr(y_pos + 1, w//4 + 2, name, self.YELLOW | curses.A_BOLD)
            self.screen.addstr(y_pos + 2, w//4 + 4, desc, self.CYAN)
        
        self.screen.addstr(h-2, 2, "Press any key to return", self.MAGENTA)
        self.screen.getch()

    def show_skills(self):
        skills = {
            "Languages": ["Python", "JavaScript", "Rust", "Go"],
            "Frontend": ["React", "Vue", "HTML/CSS"],
            "Backend": ["Django", "Node.js", "PostgreSQL"],
            "Tools": ["Git", "Docker", "AWS"]
        }
        
        self.screen.clear()
        current_y = 2
        
        for category, skill_list in skills.items():
            self.screen.addstr(current_y, 4, f"{category}:", self.YELLOW | curses.A_BOLD)
            current_y += 1
            
            # Animate skill bars
            for skill in skill_list:
                self.screen.addstr(current_y, 6, f"{skill:<12}", self.CYAN)
                for x in range(20):
                    self.screen.addstr(current_y, 20 + x, "█", self.GREEN)
                    self.screen.refresh()
                    time.sleep(0.02)
                current_y += 1
            current_y += 1
        
        self.screen.addstr(current_y + 2, 4, "Press any key to return", self.MAGENTA)
        self.screen.getch()

    def show_contact(self):
        self.screen.clear()
        h, w = self.screen.getmaxyx()
        
        contact_info = [
            "┌─────────────── Contact Me ───────────────┐",
            "│                                          │",
            "│  Email: your.email@example.com          │",
            "│  GitHub: github.com/yourusername         │",
            "│  LinkedIn: linkedin.com/in/yourprofile   │",
            "│  Twitter: @yourhandle                    │",
            "│                                          │",
            "└──────────────────────────────────────────┘"
        ]
        
        # Typing animation for contact info
        for idx, line in enumerate(contact_info):
            self.screen.addstr(h//2 - len(contact_info)//2 + idx, 
                             w//2 - len(line)//2, 
                             line, 
                             self.CYAN)
            self.screen.refresh()
            time.sleep(0.1)
        
        self.screen.addstr(h-2, 2, "Press any key to return", self.MAGENTA)
        self.screen.getch()

    def show_easter_egg(self):
        """Matrix-style rain animation as an easter egg"""
        self.screen.clear()
        h, w = self.screen.getmaxyx()
        
        # Initialize raindrops
        self.rain_drops = [(random.randint(0, w-1), 0) for _ in range(w//3)]
        
        start_time = time.time()
        while time.time() - start_time < 10:  # Run for 10 seconds
            self.screen.clear()
            
            # Update and draw raindrops
            new_drops = []
            for x, y in self.rain_drops:
                if y < h:
                    self.screen.addstr(y, x, random.choice(self.matrix_chars), 
                                     self.GREEN | curses.A_BOLD)
                    new_drops.append((x, y + 1))
                else:
                    new_drops.append((x, 0))
            
            self.rain_drops = new_drops
            self.screen.refresh()
            time.sleep(0.1)

    def animate_text(self, text_lines):
        h, w = self.screen.getmaxyx()
        for idx, line in enumerate(text_lines):
            y = h//2 - len(text_lines)//2 + idx
            x = w//2 - len(line)//2
            for char in line:
                self.screen.addstr(y, x, char, self.CYAN)
                x += 1
                self.screen.refresh()
                time.sleep(0.01)

    def run(self):
        while True:
            self.draw_menu()
            key = self.screen.getch()
            
            if key == ord('q'):
                break
            elif key == curses.KEY_UP and self.current_selection > 0:
                self.current_selection -= 1
            elif key == curses.KEY_DOWN and self.current_selection < len(self.sections) - 1:
                self.current_selection += 1
            elif key in [curses.KEY_ENTER, 10, 13]:
                # Execute the selected section's function
                section_func = list(self.sections.values())[self.current_selection]
                section_func()

def main():
    wrapper(lambda stdscr: PortfolioApp(stdscr).run())

if __name__ == "__main__":
    main()
