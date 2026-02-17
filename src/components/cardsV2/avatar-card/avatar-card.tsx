import { FC, ReactNode } from 'react';
import { BaseCard } from '../base';
import './card-style.css';

export const AvatarCard: FC<{ img?: string; title: string; }> = ({ img, title }) => {
  return (
    <>
      <BaseCard className="baseCard">
        <img src={img || ''} alt={title} />
        {title}
      </BaseCard>
    </>
  );
}
