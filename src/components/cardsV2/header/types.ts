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

const grabTextAndPaddingSizes = (size: Sizes | undefined, position: Positions | string | undefined): string[] => {
  const values: string[] = [];
  switch (size) {
    case 'sm':
      values.push('text-[16px]', 'p-[0px_24px_24px_24px]');
      break;
    case 'md':
      values.push('text-[24px]', 'p-[0px_8px_8px_8px]');
      break;
    case 'lg':
      values.push('text-[32px]', 'p-[0px_24px_24px_24px]');
      break;
    case 'xl':
      values.push('text-[48px]', 'p-[0px_24px_24px_24px]');
      break;
    case '2xl':
      values.push('text-[64px]', 'p-[0px_24px_24px_24px]');
      break;
    case '3xl':
      values.push('text-[96px]', 'p-[0px_24px_24px_24px]');
      break;
    default:
      values.push('text-[32px]', 'p-[0p);24px_24px_24px]');
      break;
  }

  switch (position) {
    case 'left':
      values.push('justify-start');
    case 'right':
      values.push('justify-end');
    case 'center':
      values.push('justify-center');
    default:
      values.push('justify-center');
  }

  console.log(values);

  return values;
}

export { HeaderTypes, grabTextAndPaddingSizes };
