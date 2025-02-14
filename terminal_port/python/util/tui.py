import curses
# author: @Override | 23:26 : 20250213

def define_color() -> None:
    curses.start_color()
    curses.init_pair(1, curses.COLOR_RED, curses.COLOR_BLACK) 
    curses.init_pair(2, curses.COLOR_GREEN, curses.COLOR_BLACK)   
    curses.init_pair(3, curses.COLOR_BLUE, curses.COLOR_BLACK)   
    curses.init_pair(4, curses.COLOR_YELLOW, curses.COLOR_BLACK)  
    curses.init_pair(5, curses.COLOR_CYAN, curses.COLOR_BLACK)   
    curses.init_pair(6, curses.COLOR_MAGENTA, curses.COLOR_BLACK) 
    # White pairs
    curses.init_pair(7, curses.COLOR_MAGENTA, curses.COLOR_WHITE) 

def draw_box(window: curses.window, start_y: int, start_x: int, height: int, width: int, color: int = 1, border_chars=None) -> None:
    if border_chars is None:
        border_chars = {
            "tl": "┌", "tr": "┐",
            "bl": "└", "br": "┘",
            "h": "─", "v": "│"
        }

    window.addch(start_y, start_x, border_chars["tl"], curses.color_pair(color))
    window.addch(start_y, start_x + width - 1, border_chars["tr"], curses.color_pair(color))
    window.addch(start_y + height - 1, start_x, border_chars["bl"], curses.color_pair(color))
    window.addch(start_y + height - 1, start_x + width - 1, border_chars["br"], curses.color_pair(color))


    for x in range(start_x + 1, start_x + width - 1):
        window.addch(start_y, x, border_chars["h"], curses.color_pair(color))
        window.addch(start_y + height - 1, x, border_chars["h"], curses.color_pair(color))

    for y in range(start_y + 1, start_y + height - 1):
        window.addch(y, start_x, border_chars["v"], curses.color_pair(color))
        window.addch(y, start_x + width - 1, border_chars["v"], curses.color_pair(color))


def display_menu(win: curses.window, selected_row_idx) -> None:
    menu_items = ["Option 1", "Option 2", "Option 3", "Exit"]
    for idx, item in enumerate(menu_items):
        x = 2
        y = 2 + idx
        if idx == selected_row_idx:
            win.attron(curses.A_REVERSE)
        win.addstr(y, x, item)
        if idx == selected_row_idx:
            win.attroff(curses.A_REVERSE)
    win.refresh()
