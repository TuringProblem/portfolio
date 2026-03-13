import { FC } from 'react';
import { PhilosophyList } from '@site/src/pages/components/philosophy';

/**
 * Author/{ @Override }: Since -> 20260307 | @13:50
 **/

export const ProfileContent: FC = () => (
  <>
    <p>I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy. With respect to leisurely activities - I enjoy programming, <a href="#" className="text-blue-600 hover:underline">music</a>, and sports.</p>
    <PhilosophyList />
  </>
);
