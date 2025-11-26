import React from 'react';
import { Divider } from '../../../divider';

/**
 * @author { @Override }
 * @Since 2025-11-26 : @16:04
 **/

export const Default: React.FC = () => {

  return (
    <div className="mt-2  bg-[var(--menu-card)] gap-2 w-full h-full rounded-md shadow-md">
      <div className="">
        <h2 className="flex justify-center text-[var(--menu-card-header)] text-2xl font-bold">
          Intro
        </h2>
        <Divider color={"white"} />
        <div className="mt-4 ml-2">

          Welcome, Thanks for checking this out! So I'm

        </div>
      </div>
    </div>
  );
};
