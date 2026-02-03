import { FC, ReactNode } from 'react';
import { Download, MailWarning, Github, GraduationCap, User } from 'lucide-react';
import { useHistory } from '@docusaurus/router';

import './styles.css';

import { clsx } from 'clsx';

interface AboutNavigationProps {
  activeRoute?: string;
}

export const AboutNavigation: FC<AboutNavigationProps> = ({ activeRoute, }) => {
  const history = useHistory();

  const buttonConfigs = [
    { route: 'profile', icon: User, label: 'Profile' },
    { route: 'github', icon: Github, label: 'Github Profile' },
    { route: 'education', icon: GraduationCap, label: 'Education' },
    { route: 'contact', icon: MailWarning, label: 'Contact' },
    { route: 'resume', icon: Download, label: 'Resume' },
  ];

  const navigateToSection = (route: string) => {
    history.push(`/portfolio/about/${route}`);
  };

  return (
    <div className="navigationItems">
      {buttonConfigs.map((config, index) => {
        const IconComponent = config.icon;
        const isActive = activeRoute === config.route;

        return (
          <div key={index} className="w-full">
            <button
              className={clsx(
                'navigationContainer',
                isActive ? 'isActive' : 'isNotActive'
              )}
              onClick={() => navigateToSection(config.route)}
            >
              <IconComponent size={24} /> {config.label}
            </button>
          </div>
        );
      })}
    </div>
  );
};
