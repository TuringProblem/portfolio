import { GraduationCap, SquareCode } from 'lucide-react';
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
    lowerText: <MassasoitLower />,
    img: 'https://massasoit.edu/_resources/videos/09%20Website%20Header.mp4'
  },
  {
    id: 'degree',
    icon: <GraduationCap size={20} />,
    title: 'Northeastern University',
    subtitle: 'Bachelor Degree',
    color: '#C8102E',
    lowerText: <NortheasternLower />
  },
  {
    id: 'skills',
    icon: <SquareCode size={20} />,
    title: 'Compilers & Languages',
    subtitle: 'Skill Development',
    color: '#000000',
  },
  // add more data in the future if needed
];


