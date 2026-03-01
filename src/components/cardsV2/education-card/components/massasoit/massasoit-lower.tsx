import { FC } from 'react';
import { AvatarCard } from '../../../avatar-card';
import { ProfessorNames } from '../shared';
import { BROWN_LESSONS, ALOUSSI_LESSONS } from '../shared/shared.types';
import { AvatarCardProps } from '../../../avatar-card';


const data: AvatarCardProps[] = [
  {
    img: ProfessorNames.BROWN_IMG,
    title: ProfessorNames.BROWN,
    lessons: BROWN_LESSONS,
  },
  {
    img: ProfessorNames.ALOUSSI_IMG,
    title: ProfessorNames.ALOUSSI,
    lessons: ALOUSSI_LESSONS,
    noImage: true,
  }
];



export const MassasoitLower: FC = () => (
  <>
    <p>
      Massasoit CC (2023 - 2025) - I studied Computer Science underneath:
    </p>
    <AvatarCard data={data} bg='massasoit' />
  </>
);
