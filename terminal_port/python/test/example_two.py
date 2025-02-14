import curses
from curses import wrapper
from datetime import datetime

class TodoTUI:
    def __init__(self, stdscr):
        self.stdscr = stdscr
        self.setup_screen()
        self.tasks = []
        self.current_task = 0
        self.edit_mode = False
        self.new_task_buffer = ""
        
    def setup_screen(self):
        curses.start_color()
        curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)  # Completed tasks
        curses.init_pair(2, curses.COLOR_YELLOW, curses.COLOR_BLACK)  # Selected task
        curses.init_pair(3, curses.COLOR_RED, curses.COLOR_BLACK)  # High priority
        curses.curs_set(0)  # Hide cursor
        self.max_y, self.max_x = self.stdscr.getmaxyx()

    def add_task(self, description, priority="normal"):
        self.tasks.append({
            "description": description,
            "completed": False,
            "priority": priority,
            "created_at": datetime.now().strftime("%Y-%m-%d %H:%M")
        })

    def draw_screen(self):
        self.stdscr.clear()
        
        # Draw title (safely)
        title = "Task Manager TUI"
        try:
            self.stdscr.addstr(0, (self.max_x - len(title)) // 2, title, curses.A_BOLD)
        except curses.error:
            pass
        
        # Calculate available space for tasks
        max_display_tasks = self.max_y - 4  # Reserve space for title and status bar
        
        # Draw tasks
        for idx, task in enumerate(self.tasks):
            if idx >= max_display_tasks:
                break
                
            y = idx + 2
            
            # Task format: [x] Task description (priority) - date
            checkbox = "[x]" if task["completed"] else "[ ]"
            display = f"{checkbox} {task['description']} ({task['priority']}) - {task['created_at']}"
            
            # Truncate display string if it's too long
            max_length = self.max_x - 3
            if len(display) > max_length:
                display = display[:max_length-3] + "..."
            
            # Apply appropriate styling
            if idx == self.current_task and not self.edit_mode:
                attr = curses.color_pair(2) | curses.A_BOLD
            elif task["completed"]:
                attr = curses.color_pair(1)
            elif task["priority"] == "high":
                attr = curses.color_pair(3)
            else:
                attr = curses.A_NORMAL
            
            # Draw task (safely)
            try:
                self.stdscr.addstr(y, 2, display, attr)
            except curses.error:
                pass
        
        # Draw new task input if in edit mode
        if self.edit_mode:
            input_y = min(self.current_task + 2, self.max_y - 4)
            try:
                self.stdscr.addstr(input_y, 2, "New task: " + self.new_task_buffer[:self.max_x-13])
                curses.curs_set(1)  # Show cursor in edit mode
            except curses.error:
                pass
        else:
            curses.curs_set(0)
        
        # Draw status bar (safely)
        status = " a: Add Task | d: Delete | space: Toggle | p: Priority | q: Quit "
        try:
            status_bar = status.center(self.max_x - 1, "-")
            self.stdscr.addstr(self.max_y - 2, 0, status_bar, curses.A_REVERSE)
        except curses.error:
            pass
        
        self.stdscr.refresh()

    def handle_input(self, key):
        if self.edit_mode:
            return self.handle_edit_mode(key)
            
        if key == ord('q'):
            return False
        elif key == ord('a'):
            self.edit_mode = True
            self.new_task_buffer = ""
        elif key == ord('d') and self.tasks:
            self.tasks.pop(self.current_task)
            if self.current_task >= len(self.tasks):
                self.current_task = max(0, len(self.tasks) - 1)
        elif key == ord(' ') and self.tasks:
            self.tasks[self.current_task]['completed'] = not self.tasks[self.current_task]['completed']
        elif key == ord('p') and self.tasks:
            current_priority = self.tasks[self.current_task]['priority']
            priorities = ['low', 'normal', 'high']
            current_idx = priorities.index(current_priority)
            self.tasks[self.current_task]['priority'] = priorities[(current_idx + 1) % 3]
        elif key == curses.KEY_UP and self.current_task > 0:
            self.current_task -= 1
        elif key == curses.KEY_DOWN and self.current_task < len(self.tasks) - 1:
            self.current_task += 1
            
        return True

    def handle_edit_mode(self, key):
        if key == 27:  # Escape
            self.edit_mode = False
        elif key == 10:  # Enter
            if self.new_task_buffer.strip():
                self.add_task(self.new_task_buffer.strip())
            self.edit_mode = False
            self.new_task_buffer = ""
        elif key == curses.KEY_BACKSPACE or key == 127:  # Backspace
            self.new_task_buffer = self.new_task_buffer[:-1]
        elif 32 <= key <= 126:  # Printable characters
            self.new_task_buffer += chr(key)
        return True

    def run(self):
        running = True
        while running:
            # Update screen dimensions in case of resize
            self.max_y, self.max_x = self.stdscr.getmaxyx()
            self.draw_screen()
            key = self.stdscr.getch()
            running = self.handle_input(key)

def main(stdscr):
    app = TodoTUI(stdscr)
    # Add some sample tasks
    app.add_task("Complete project documentation", "high")
    app.add_task("Review pull requests", "normal")
    app.add_task("Update dependencies", "low")
    app.run()

if __name__ == "__main__":
    wrapper(main)
