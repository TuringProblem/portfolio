import { FC } from 'react';
import { BaseCard } from '../base';
import './card-style.css';


type Background = 'massasoit' | 'northeastern';

interface AvatarCardProps {
  img?: string;
  title: string;
  lessons?: string[];
  bg: Background;
}

const backgroundMap: Record<Background, string[]> = {
  massasoit: ['bg-[var(--avatar-card-massasoit)]', 'border-[var(--avatar-card-border-massasoit)]', 'flex-grid grid-cols-2'],
  northeastern: ['bg-[var(--avatar-card-northeastern)]', 'border-[var(--avatar-card-border-northeastern)]', 'flex-grid grid-cols-3'],

}

const handleBg = (bg: Background): string[] => {
  const values = backgroundMap[bg];
  return [...values];
}


export const AvatarCard: FC<AvatarCardProps> = ({ img, title, lessons, bg, }) => {
  const [bgClass, borderClass, gridSize] = handleBg(bg);

  return (
    <>
      <BaseCard className={`baseCard ${bgClass} ${borderClass}`}>
        <img src={img || ''} alt={title} className="w-[100px] h-[100px] rounded-full" />
        {title}
        {lessons && lessons.map((lesson, index) => (
          <li key={index} className="text-[12px] justify-start">{lesson}</li>
        ))}
      </BaseCard>
    </>
  );
}
