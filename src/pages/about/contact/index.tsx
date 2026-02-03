import React from 'react';
import { AboutSection } from '../_about-section';
import { aboutData } from '../_data';

const ContactPage = () => {
  const contactData = aboutData.data.find(item => item.navigationActiveRoute === 'contact');

  if (!contactData) {
    return <div>Contact page not found</div>;
  }

  return <AboutSection sectionData={contactData} />;
}

export default ContactPage;
