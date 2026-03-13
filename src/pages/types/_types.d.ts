import { ReactNode } from 'react';

export type GetHeight = () => number;
export type GetChanges = (resumeImageUrl: string) => Record<string, ReactNode>;
export type ButtonConfig = Record<string, string>;
