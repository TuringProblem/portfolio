import { ReactNode } from 'react';

export interface philosophyListProps {
  philosopher: string;
  link: string;
  imageLink: string;
  quote?: string;
  description?: ReactNode;
}

export interface ListProps {
  values: philosophyListProps[];
  onClick?: (e: React.ReactNode) => void;
}
