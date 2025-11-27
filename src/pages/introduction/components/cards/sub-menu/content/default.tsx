import React from 'react';
import { Divider } from '../../../divider';
import { MainCard } from '../../../../../../components';

/**
 * @author { @Override }
 * @Since 2025-11-26 : @16:04
 **/




const ScrollableListContent: React.FC = () => {
  return (
    <div className="ml-5 flex flex-col gap-2 justify-center">
      <h1 className="text-xl"> Programming Languages </h1>
      <Divider color="intro" className="w-[100px] justify-center mt-0 !ml-0" />
      <code className="m-5 bg-[var(--bg-secondary)] rounded-md p-2 text-[var(--text-secondary)]">
        <div className="flex flex-col gap-2">
          <a href="" className="hover:text-[var(--active-text)] hover:bg-[var(--active-bg)] hover:cursor-pointer rounded-md w-[75px]">- Java</a>
          <a href="" className="hover:text-[var(--active-text)] hover:bg-[var(--active-bg)] hover:cursor-pointer rounded-md w-[140px]">- TypeScript</a>
          <a href="" className="hover:text-[var(--active-text)] hover:bg-[var(--active-bg)] hover:cursor-pointer rounded-md w-[100px]">- Python</a>
        </div>
      </code>

      <h1 className="text-xl"> Tooling </h1>
      <Divider color="intro" className="w-[100px] justify-center mt-0 !ml-0" />
      <div>
        Qlty
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <h1 className="text-xl"> Text Editors</h1>
          <Divider color="intro" className="w-[175px] justify-center mt-2 !ml-0" />
        </div>
        <img src={"https://download.logo.wine/logo/Vim_(text_editor)/Vim_(text_editor)-Logo.wine.png"} alt="Vim" className="w-[150px] h-[100px]" />
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1680px-Neovim-mark.svg.png"} alt="Vim" className="w-[50px] h-[50px]" />
      </div>
      <div>
        I us to use IntelliJ/VsCode and currently I've been using Neovim/Vim (over a year now)
      </div>

      <h1 className="text-xl"> Operating Systems</h1>
      <Divider color="intro" className="w-[100px] justify-start mt-0 !ml-0" />
      <div>
        - Arch, MacOS, Windows
      </div>
    </div>
  );
};

export const Default: React.FC = () => {

  return (
    <div className="mt-2  bg-[var(--menu-card)] gap-2 w-full h-full rounded-md shadow-md">
      <div className="pt-4">
        <h2 className=" flex justify-center text-[var(--menu-card-header)] text-2xl font-bold">
          Introduction
        </h2>
        <Divider color="intro" />
        <div className="m-8 justify-center">
          Welcome, Thanks for checking this out! As you can see I'm a computer scientist with a passion for programming, and Mathematics. Below is a <strong className="text-[var(--accent)]">scrollable</strong> list of things I truly enjoy

          <MainCard title="List (Scrollable)" className="m-4 justify-center mr-2 h-[400px] overflow-y-auto" color="black" >
            <Divider color="intro" />
            <ScrollableListContent />
          </MainCard>
          You can see that I'm pretty decent at programming, I'm a progressional...
        </div>
      </div>
    </div>
  );
};
