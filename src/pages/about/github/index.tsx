import React from 'react';
import { AboutSection } from '../_about-section';
import { aboutData } from '../_data';

const GithubPage = () => {
  const githubData = aboutData.data.find(item => item.navigationActiveRoute === 'github');

  if (!githubData) {
    return <div>GitHub page not found</div>;
  }

  return <AboutSection sectionData={githubData} />;
}

export default GithubPage;
