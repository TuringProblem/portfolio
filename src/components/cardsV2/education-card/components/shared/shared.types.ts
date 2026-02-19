import { AvatarCardProps } from '../avatar-card';

export enum ProfessorNames {
  ALOUSSI = 'Dr. Sarhmaad Al Aloussi',
  ALOUSSI_IMG = 'https://www.cs.mass.edu/~jbs/images/jbs.jpg',
  BROWN = 'Janet Brown-Sederberg',
  BROWN_IMG = 'https://media.licdn.com/dms/image/v2/D4E03AQESpy-b01tk4w/profile-displayphoto-shrink_400_400/B4EZbrqJEyHAAk-/0/1747710415530?e=1772668800&v=beta&t=jspzqA5gBzrXkkZO5DG8Y5RNY0ZRu1d2Kzfz7ycX3T4',
  BELL = 'Johnathen Bell',
  BELL_IMG = 'https://prl.khoury.northeastern.edu/img/jon_bell.jpg',
  HOLTZEN = 'Steven Holtzen',
  HOLTZEN_IMG = 'https://prl.khoury.northeastern.edu/img/steven_holtzen.png',
  ZHENGZHONG = 'Zhengzhong Jin',
  ZHENGZHONG_IMG = 'https://media.licdn.com/dms/image/v2/D4E03AQHbHtntT8qXIw/profile-displayphoto-shrink_400_400/B4EZW16_dkH0Ag-/0/1742513895758?e=1772668800&v=beta&t=KpQ9pA_ah-FbYLLS8ncOV9C3GFdiTbj_oIdiiUvc2JM',
}
export const JIN_LESSONS = [
  'CS 3800 - Theory of Computation',
];

export const BELL_LESSONS = [
  'CS 3100 - Programming Design and Implementations II',
  'CS 3101 - Lab for 3100'
];


export const BROWN_LESSONS = [
  'Introduction to Java',
  'Introduction to Python'
]
export const ALOUSSI_LESSONS = [
  'Advanced Java',
  'System Design',
  'Data Structures and Algorithms'
]

export const data: AvatarCardProps[] = [
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

