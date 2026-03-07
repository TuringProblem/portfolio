export interface AboutPage {
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


export interface AboutPageProps {
  sectionData: AboutPage;
  resumeImageUrl?: string;
}

export type QRProps = { ref: LocationRef, qrLink: string };

