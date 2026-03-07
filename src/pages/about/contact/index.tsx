import React from 'react';
import { AboutSection } from '../_about-section';
import { aboutData } from '../data';

const ContactPage = () => {
  console.log(aboutData.contact);
  return <AboutSection sectionData={aboutData.contact} />;

}


export default ContactPage;
