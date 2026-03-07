import { FC, ReactNode } from 'react';

export const ResumeContent: FC<{ imageUrl: string }> = ({ imageUrl }): ReactNode => (
  <>
    <img src={imageUrl} alt="Resume" className="w-[1000px] object-contain" />
  </>
);

