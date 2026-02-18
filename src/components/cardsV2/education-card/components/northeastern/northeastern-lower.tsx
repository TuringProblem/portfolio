import { FC } from 'react';
import { AvatarCard } from '../../../avatar-card';
import { ProfessorNames } from '../shared';

import '../shared/shared-styles.css';

const JIN_LESSONS = [
  'CS 3800 - Theory of Computation',
];

const BELL_LESSONS = [
  'CS 3100 - Programming Design and Implementations II',
  'CS 3101 - Lab for 3100'
];

export const NortheasternLower: FC = () => (
  <>
    <div>
      Northeastern University (2025 - current) - I currently attend where I'm studying <strong>Theoretical Computer Science</strong>
    </div>
    <div>
      Here I found my passion for <strong>Mathematics</strong>, <strong>Complexity Theory</strong>, and <strong>Programming Languages</strong>
    </div>
    <div className="wrapper">
      <AvatarCard img={ProfessorNames.ZHENGZHONG_IMG} title={ProfessorNames.ZHENGZHONG} lessons={JIN_LESSONS} bg="northeastern" />
      <AvatarCard img={ProfessorNames.BELL_IMG} lessons={BELL_LESSONS} title={ProfessorNames.BELL} bg="northeastern" />
      <AvatarCard img={ProfessorNames.HOLTZEN_IMG} title={ProfessorNames.HOLTZEN} bg="northeastern" />
    </div>
  </>
);
