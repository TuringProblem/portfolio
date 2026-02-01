type Sizes =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';

type HeaderTypes = { title: string; size?: Sizes }

const grabTextAndPaddingSizes = (size: Sizes | undefined): string[] => {
  switch (size) {
    case 'sm':
      return ['text-[16px]', 'p-[0px_24px_24px_24px]'];
    case 'md':
      return ['text-[24px]', 'p-[0px_8px_8px_8px]'];
    case 'lg':
      return ['text-[32px]', 'p-[0px_24px_24px_24px]'];
    case 'xl':
      return ['text-[48px]', 'p-[0px_24px_24px_24px]'];
    case '2xl':
      return ['text-[64px]', 'p-[0px_24px_24px_24px]'];
    case '3xl':
      return ['text-[96px]', 'p-[0px_24px_24px_24px]'];
    default:
      return ['text-[32px]', 'p-[0px_24px_24px_24px]'];
  }
}

export { HeaderTypes, grabTextAndPaddingSizes };
