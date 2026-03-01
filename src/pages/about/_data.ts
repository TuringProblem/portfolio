interface AboutPage {
  resumeUrl: string;
  layoutTitle: string;
  layoutDescription: string;
  navigationActiveRoute: string;
  locationRef: LocationRef;
  showNavigationHome: boolean;
  hasDownloadButton: boolean;
  contentKey: string;
  isStatic: boolean;
  qrLink?: string
}

type LocationRef =
  | 'profile'
  | 'github'
  | 'education'
  | 'contact'
  | 'resume'

interface AboutPageData {
  data: AboutPage[];
}

interface AboutPageProps {
  sectionData: AboutPage;
  resumeImageUrl?: string;
}

type QRProps = { ref: LocationRef, qrLink: string };


// BUG: useDynamicHeight logic is reversed, fix the name - make it isStatic 
const aboutData: AboutPageData = {
  data: [
    {
      resumeUrl: '/img/resume.png',
      layoutTitle: 'Profile',
      layoutDescription: 'Andrew\'s Profile',
      navigationActiveRoute: 'profile',
      locationRef: 'profile',
      showNavigationHome: true,
      hasDownloadButton: false,
      contentKey: 'default',
      isStatic: true,
    },
    {
      resumeUrl: '/img/resume.png',
      layoutTitle: 'GitHub Profile',
      layoutDescription: 'Andrew\'s GitHub Profile',
      navigationActiveRoute: 'github',
      locationRef: 'github',
      showNavigationHome: true,
      hasDownloadButton: false,
      contentKey: 'github',
      isStatic: true,
      qrLink: 'https://github.com/TuringProblem'
    },
    {
      resumeUrl: '/img/resume.png',
      layoutTitle: 'Education',
      layoutDescription: 'Andrew\'s Education',
      navigationActiveRoute: 'education',
      locationRef: 'education',
      showNavigationHome: true,
      hasDownloadButton: false,
      contentKey: 'education',
      isStatic: true,
    },
    {
      resumeUrl: '/img/resume.png',
      layoutTitle: 'Contact',
      layoutDescription: 'Andrew\'s Contact Information',
      navigationActiveRoute: 'contact',
      locationRef: 'contact',
      showNavigationHome: true,
      hasDownloadButton: false,
      contentKey: 'contact',
      isStatic: true,
    },
    {
      resumeUrl: '/img/resume.png',
      layoutTitle: 'Resume',
      layoutDescription: 'Andrew\'s Resume',
      navigationActiveRoute: 'resume',
      locationRef: 'resume',
      showNavigationHome: true,
      hasDownloadButton: true,
      contentKey: 'resume',
      isStatic: false,
    },
  ]
} satisfies AboutPageData;



export { aboutData, AboutPage, AboutPageData, AboutPageProps, QRProps };


