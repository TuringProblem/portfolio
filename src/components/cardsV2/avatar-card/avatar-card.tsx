import { FC } from 'react';
import { BaseCard } from '../base';
import './card-style.css';

type Background = 'massasoit' | 'northeastern';

export interface AvatarCardProps {
  img?: string;
  title: string;
  lessons?: string[];
  img_ref?: string;
}

interface AvatarData {
  data: AvatarCardProps[];
  bg: Background;
}

const backgroundMap: Record<Background, string[]> = {
  massasoit: ['bg-[var(--avatar-card-massasoit)]', 'border-[var(--avatar-card-border-massasoit)]', 'flex-grid grid-cols-2 sm:grid-cols-1'],
  northeastern: ['bg-[var(--avatar-card-northeastern)]', 'border-[var(--avatar-card-border-northeastern)]', 'flex-grid grid-cols-3'],
}

const handleBg = (bg: Background): string[] => {
  const values = backgroundMap[bg];
  return [...values];
}

export const AvatarCard: FC<AvatarData> = ({ data, bg }) => {
  const [bgClass, borderClass, gridSize] = handleBg(bg);

  return (
    <div className={`wrapper ${gridSize}`}>
      {data.map((item: AvatarCardProps, index: number) => (
        <BaseCard className={`baseCard ${bgClass} ${borderClass}`} key={index}>
          <img src={item.img || ''} alt={item.title} className="w-[100px] h-[100px] rounded-full" />
          <a href={item.img_ref}>{item.title}</a>
          {item.lessons && item.lessons.map((lesson, index) => (
            <li key={index} className="text-[12px] justify-start">{lesson}</li>
          ))}
        </BaseCard>
      ))}
    </div>
  );
}
