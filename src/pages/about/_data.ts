
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


export { AboutPage, AboutPageData, AboutPageProps, QRProps };


