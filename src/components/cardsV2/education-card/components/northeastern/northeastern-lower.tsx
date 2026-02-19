import { FC } from 'react';
import { AvatarCard } from '../../../avatar-card';
import { ProfessorNames } from '../shared';
import { JIN_LESSONS, BELL_LESSONS } from '../shared/shared.types';
import { AvatarCardProps } from '../../../avatar-card';


const data: AvatarCardProps[] = [
  {
    img: ProfessorNames.ZHENGZHONG_IMG,
    title: ProfessorNames.ZHENGZHONG,
    lessons: JIN_LESSONS,
    bg: 'northeastern'
  },
  {
    img: ProfessorNames.BELL_IMG,
    lessons: BELL_LESSONS,
    title: ProfessorNames.BELL,
    bg: 'northeastern'
  },
  {
    img: ProfessorNames.HOLTZEN_IMG,
    title: ProfessorNames.HOLTZEN,
    bg: 'northeastern'
  }
];

export const NortheasternLower: FC = () => (
  <>
    <p>
      Northeastern University (2025 - current) - I currently attend where I'm studying <strong>Theoretical Computer Science</strong> <br />
      Here I found my passion for <strong>Mathematics</strong>, <strong>Complexity Theory</strong>, and <strong>Programming Languages</strong>
    </p>
    <AvatarCard data={data} />
  </>
);
