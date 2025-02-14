import curses
from curses import wrapper
import psutil
import time
from datetime import datetime

class SystemMonitorTUI:
    def __init__(self, stdscr):
        self.stdscr = stdscr
        self.setup_screen()
        self.cpu_history = []
        self.memory_history = []
        self.max_history = 60  # Keep 60 seconds of history
        
    def setup_screen(self):
        curses.start_color()
        curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)   # Normal levels
        curses.init_pair(2, curses.COLOR_YELLOW, curses.COLOR_BLACK)  # Warning levels
        curses.init_pair(3, curses.COLOR_RED, curses.COLOR_BLACK)     # Critical levels
        curses.curs_set(0)
        self.max_y, self.max_x = self.stdscr.getmaxyx()

    def get_color_for_percentage(self, percentage):
        if percentage < 60:
            return curses.color_pair(1)
        elif percentage < 85:
            return curses.color_pair(2)
        else:
            return curses.color_pair(3)

    def draw_graph(self, y, x, width, height, data, title):
        if not data:
            return
            
        # Check boundaries
        if y < 0 or x < 0 or y + height >= self.max_y or x + width >= self.max_x:
            return
            
        # Draw border
        for i in range(height):
            self.stdscr.addstr(y + i, x, "|")
            self.stdscr.addstr(y + i, x + width + 1, "|")
        self.stdscr.addstr(y + height, x, "+" + "-" * width + "+")
        
        # Draw title
        if y > 0:  # Only draw title if there's space
            self.stdscr.addstr(y - 1, x, title[:width])  # Truncate title if needed
        
        # Draw graph
        max_val = 100  # Percentage values
        for i, val in enumerate(data[-width:]):
            graph_height = int((val / max_val) * (height - 1))
            color = self.get_color_for_percentage(val)
            
            for h in range(graph_height):
                self.stdscr.addstr(y + height - 1 - h, x + i + 1, "█", color)

    def update_stats(self):
        cpu_percent = psutil.cpu_percent()
        memory = psutil.virtual_memory()
        
        self.cpu_history.append(cpu_percent)
        self.memory_history.append(memory.percent)
        
        # Keep only max_history items
        if len(self.cpu_history) > self.max_history:
            self.cpu_history.pop(0)
        if len(self.memory_history) > self.max_history:
            self.memory_history.pop(0)

    def draw_screen(self):
        self.stdscr.clear()
        
        # Draw title
        title = "System Monitor (Press 'q' to quit)"
        start_x = max(0, (self.max_x - len(title)) // 2)
        self.stdscr.addstr(0, start_x, title, curses.A_BOLD)

        # Draw CPU stats
        cpu_count = psutil.cpu_count()
        cpu_percent = psutil.cpu_percent()
        self.stdscr.addstr(2, 2, f"CPU Cores: {cpu_count}")
        self.stdscr.addstr(3, 2, f"CPU Usage: {cpu_percent}%", 
                          self.get_color_for_percentage(cpu_percent))

        # Draw Memory stats
        memory = psutil.virtual_memory()
        self.stdscr.addstr(5, 2, f"Memory Total: {memory.total / (1024**3):.1f} GB")
        self.stdscr.addstr(6, 2, f"Memory Usage: {memory.percent}%",
                          self.get_color_for_percentage(memory.percent))

        # Draw disk usage
        disk = psutil.disk_usage('/')
        self.stdscr.addstr(8, 2, f"Disk Total: {disk.total / (1024**3):.1f} GB")
        self.stdscr.addstr(9, 2, f"Disk Usage: {disk.percent}%",
                          self.get_color_for_percentage(disk.percent))

        # Draw graphs if there's enough space
        if self.max_x > 40 and self.max_y > 20:
            graph_width = min(self.max_history, self.max_x - 45)
            self.draw_graph(12, 2, graph_width, 5, self.cpu_history, "CPU History")
            self.draw_graph(12, graph_width + 5, graph_width, 5, self.memory_history, "Memory History")

        # Draw status bar (safely)
        status = " Press 'q' to quit "
        status = status.center(self.max_x - 1, "-")
        try:
            self.stdscr.addstr(self.max_y - 2, 0, status, curses.A_REVERSE)
        except curses.error:
            pass

        self.stdscr.refresh()

    def run(self):
        running = True
        while running:
            self.update_stats()
            self.draw_screen()
            
            # Check for input with timeout
            self.stdscr.timeout(1000)  # 1 second timeout
            try:
                key = self.stdscr.getch()
                if key == ord('q'):
                    running = False
            except curses.error:
                pass  # Timeout occurred, continue

def main(stdscr):
    app = SystemMonitorTUI(stdscr)
    app.run()

if __name__ == "__main__":
    wrapper(main)
