import React from 'react';
import { VersionOne, Default } from './submenus';


// TODO: Need to figure out a way to make @see{MainCard.tsx} onClick -> change the version
interface SubmenuProps {
  version?: string;
}


export const SubmenuCard: React.FC<SubmenuProps> = ({ version }) => {
  switch (version) {
    case 'v1':
      return <VersionOne />;

    default:
      return <Default />;
  }
};
