export interface philosophyListProps {
  philosopher: string;
  link: string;
  imageLink: string;
  quote?: string;
}

export interface ListProps {
  values: philosophyListProps[];
}
