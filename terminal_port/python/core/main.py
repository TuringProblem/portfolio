import curses
import tui


standard_screen: curses.window = curses.initscr()


def hint_login(new_screen: curses.window) -> None:
    new_screen.refresh()
    new_screen.border()

    print("\n\n\n\nfuck\n")
    




def main(stdscr: curses.window) -> None:

    curses.curs_set(1)
    curses.noecho()
    curses.cbreak()
    standard_screen.keypad(True)
    print(type(stdscr))
    # Your application logic here
    curses.start_color()
    curses.init_pair(1, curses.COLOR_MAGENTA, curses.COLOR_WHITE)
    curses.echo()
    stdscr.addstr(20, 20, "Please Enter Credentials: ")
    stdscr.refresh()
    stdscr.getch() # Wait for user input before exiting


main(standard_screen)
hint_login(standard_screen)

tui.display_menu()

