interface AboutPage {
  resumeUrl: string;
  layoutTitle: string;
  layoutDescription: string;
  navigationActiveRoute: string;
  locationRef: string;
  showNavigationHome: boolean;
  hasDownloadButton: boolean;
  contentKey: string;
  useDynamicHeight: boolean;
}

interface AboutPageData {
  data: AboutPage[];
}

interface AboutPageProps {
  sectionData: AboutPage;
  resumeImageUrl?: string;
}


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
      useDynamicHeight: true,
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
      useDynamicHeight: true,
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
      useDynamicHeight: true,
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
      useDynamicHeight: true,
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
      useDynamicHeight: true,
    },
  ]
} satisfies AboutPageData;



export { aboutData, AboutPage, AboutPageData, AboutPageProps };


