import React from 'react';
import {
  VersionOne,
  Default
} from './content';

/**
 * @author { @Override }
 * @Since 2025-11-26 : @16:04
 **/



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
