/**
 * @author { @Override }
 * @since 02012026
 * @see <a href="https://github.com/TuringProblem">Github Profile</a>
 **/

type Sizes =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';

type Positions =
  | 'left'
  | 'right'
  | 'center'

type HeaderTypes = {
  title: string;
  size?: Sizes
  position?: Positions | string;
}



export { HeaderTypes, Positions, Sizes };
