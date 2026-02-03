import React from 'react';
import { AboutSection } from '../_about-section';
import { aboutData } from '../_data';

const ProfilePage = () => {
  const profileData = aboutData.data.find(item => item.navigationActiveRoute === 'profile');

  if (!profileData) {
    return <div>Profile not found</div>;
  }

  return <AboutSection sectionData={profileData} />;
}

export default ProfilePage;
