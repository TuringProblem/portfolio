import React from 'react';
import { AboutSection } from '../_about-section';
import { aboutData } from '../_data';

const EducationPage = () => {
  const educationData = aboutData.data.find(item => item.navigationActiveRoute === 'education');

  if (!educationData) {
    return <div>Education page not found</div>;
  }

  return <AboutSection sectionData={educationData} />;
}

export default EducationPage;
