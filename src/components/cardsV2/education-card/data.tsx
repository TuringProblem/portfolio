import { GraduationCap, Award, Calendar, Flame, Star } from 'lucide-react';
import { EducationData } from './education-card';
import { MassasoitLower } from './components/massasoit';
import { NortheasternLower } from './components/northeastern';



export const educationData: EducationData[] = [
  {
    id: 'degree',
    icon: <GraduationCap size={20} />,
    title: 'Massasoit CC',
    subtitle: 'Associate Degree',
    color: '#EAAA00',
    lowerText: <MassasoitLower />
  },
  {
    id: 'certification',
    icon: <GraduationCap size={20} />,
    title: 'Northeastern University',
    subtitle: 'Bachelor Degree',
    color: '#C8102E',
    lowerText: <NortheasternLower />
  },
  {
    id: 'courses',
    icon: <Award size={20} />,
    title: 'Online Learning',
    subtitle: 'Skill Development',
    color: '#000fff'
  },
  {
    id: 'projects',
    icon: <Star size={20} />,
    title: 'Projects Built',
    subtitle: 'Practical Experience',
    color: '#2ECC71'
  },
  {
    id: 'timeline',
    icon: <Calendar size={20} />,
    title: 'Academic Path',
    subtitle: 'Education Journey',
    color: '#5D9CEC'
  },
  {
    id: 'achievements',
    icon: <Flame size={20} />,
    title: 'Achievements',
    subtitle: 'Recognition Earned',
    color: '#AC92EC'
  }
];


