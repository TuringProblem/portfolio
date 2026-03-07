import { AboutPage } from "../_data";


const BASE = {
  resumeUrl: '/img/resume.png',
  showNavigationHome: true,
  hasDownloadButton: false,
  isStatic: true,
} as const;

export const aboutData: Record<string, AboutPage> = {
  profile: {
    ...BASE,
    layoutTitle: 'Profile',
    layoutDescription: 'Andrew\'s Profile',
    navigationActiveRoute: 'profile',
    locationRef: 'profile',
    contentKey: 'profile',
  },
  github: {
    ...BASE,
    layoutTitle: 'GitHub Profile',
    layoutDescription: 'Andrew\'s GitHub Profile',
    navigationActiveRoute: 'github',
    locationRef: 'github',
    contentKey: 'github',
  },
  education: {
    ...BASE,
    layoutTitle: 'Education',
    layoutDescription: 'Andrew\'s Education',
    navigationActiveRoute: 'education',
    locationRef: 'education',
    contentKey: 'education',
  },
  contact: {
    ...BASE,
    layoutTitle: 'Contact',
    layoutDescription: 'Andrew\'s Contact Information',
    navigationActiveRoute: 'contact',
    locationRef: 'contact',
    contentKey: 'contact',
  },
  resume: {
    ...BASE,
    layoutTitle: 'Resume',
    layoutDescription: 'Andrew\'s Resume',
    navigationActiveRoute: 'resume',
    locationRef: 'resume',
    contentKey: 'resume',
    isStatic: false,
  },
};

