import { FC, ReactNode } from 'react';
import { Download, MailWarning, Github, GraduationCap, User } from 'lucide-react';
import { useHistory } from '@docusaurus/router';

import './styles.css';

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
          <div key={index}>
            <button
              className={`flex gap-1 hover:shadow-[0px_1px_1px_0px] p-[4px] rounded-[8px] justify-center items-center gap-[8px] border-2 transition-colors hover:cursor-pointer ${isActive
                ? 'border-[var(--ifm-color-primary)] text-[var(--ifm-color-primary)] bg-[var(--ifm-color-primary-light)]'
                : 'hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] w-full hover:cursor-pointer'
                }`}
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
