import { FC } from 'react';
import { AvatarCard } from '../../../avatar-card';

enum ProfessorNames {
  ALOUSSI = 'Dr. Sarhmaad Al Aloussi',
  ALOUSSI_IMG = 'https://www.cs.mass.edu/~jbs/images/jbs.jpg',
  BROWN = 'Janet Brown-Sederberg',
  BROWN_IMG = 'https://www.cs.mass.edu/~jbs/images/jbs.jpg'
}

export const MassasoitLower: FC = () => (
  <>
    Massasoit CC (2023- 2025) - I studied Computer Science underneath Dr. Sarhmaad Al Aloussi, and Janet Brown-Sederberg
    <div className="flex flex-row gap-[16px]">
      <AvatarCard img={ProfessorNames.BROWN_IMG} title={ProfessorNames.BROWN} />
      <AvatarCard img={ProfessorNames.ALOUSSI_IMG} title={ProfessorNames.ALOUSSI} />
    </div>
  </>
);
