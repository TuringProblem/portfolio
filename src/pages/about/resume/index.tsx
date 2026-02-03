import React from 'react';
import { AboutSection } from '../_about-section';
import { aboutData } from '../_data';

const ResumePage = () => {
  const resumeData = aboutData.data.find(item => item.navigationActiveRoute === 'resume');

  if (!resumeData) {
    return <div>Resume page not found</div>;
  }

  return <AboutSection sectionData={resumeData} />;
}

export default ResumePage;
