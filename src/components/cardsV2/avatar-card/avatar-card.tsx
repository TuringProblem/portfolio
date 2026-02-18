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

const handleBg = (bg: Background): string[] => {
  const values: string[] = [];
  switch (bg) {
    case 'massasoit':
      values.push('bg-[var(--avatar-card-massasoit)]');
      values.push('border-[var(--avatar-card-border-massasoit)]');
      break;
    case 'northeastern':
      values.push('bg-[var(--avatar-card-northeastern)]');
      values.push('border-[var(--avatar-card-border-northeastern)]');
      break;
    default:
      values.push('bg-[var(--ifm-color-primary)]');
      break;
  }
  return values;
}


export const AvatarCard: FC<AvatarCardProps> = ({ img, title, lessons, bg, }) => {
  const [bgClass, borderClass] = handleBg(bg);

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
