import { FC } from 'react';
import { AvatarCard } from '../../../avatar-card';
import { ProfessorNames } from '../shared';

import '../shared/shared-styles.css';

const brownLessons = [
  'Introduction to Java',
  'Introduction to Python'
]
const aloussiLessons = [
  'Advanced Java',
  'System Design',
  'Data Structures and Algorithms'
]

export const MassasoitLower: FC = () => (
  <>
    <p>
      Massasoit CC (2023 - 2025) - I studied Computer Science underneath:
    </p>
    <div className="wrapper">
      <AvatarCard img={ProfessorNames.BROWN_IMG} title={ProfessorNames.BROWN} lessons={brownLessons} bg="massasoit" />
      <AvatarCard img={ProfessorNames.ALOUSSI_IMG} title={ProfessorNames.ALOUSSI} lessons={aloussiLessons} bg="massasoit" />
    </div>
  </>
);
