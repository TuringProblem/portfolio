import React from 'react';
import { Divider } from '../../../divider';
import { MainCard } from '../../../../../../components';
import { ImageWithLinkProps } from '../../../../../../components/cards/sub-menu/content/interface';
import clsx from 'clsx';
/**
 * @author { @Override }
 * @Since 2025-11-26 : @16:04
 **/

const ImageWithLink: React.FC<ImageWithLinkProps> = ({ image_source, image_custom, href }) => {

  const image_map: Record<string, React.ReactNode> = {
    "java": <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1680px-Neovim-mark.svg.png" alt="Java" className={image_custom} />,
    "typescript": <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1680px-Neovim-mark.svg.png" alt="TypeScript" className={image_custom} />,
    "python": <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1680px-Neovim-mark.svg.png" alt="Python" className={image_custom} />,
  }

  return (
    <div className="flex flex-col grid-cols-2 gap-2">

      {image_map[image_source]}
      <a href={href} className={clsx(`p-2 hover:text-[var(--active-text)] hover:bg-[var(--active-bg)] hover:cursor-pointer rounded-md w-[100px]`)}> - {image_source}</a>
    </div >
  )
};


const ScrollableListContent: React.FC = () => {
  return (
    <div className="ml-5 flex flex-col gap-2 justify-center">
      <h1 className="text-xl mt-6"> Programming Languages </h1>
      <Divider color="intro" className="w-[300px] justify-center mt-0 !ml-0" />
      <code className="m-5 bg-[var(--bg-secondary)] rounded-md p-2 text-[var(--text-secondary)]">
        <div className="flex flex-row justify-center gap-2">
          <ImageWithLink image_source="java" href="" image_custom="w-[100px]" />
          <ImageWithLink image_source="python" href="" image_custom="w-[100px]" />
          <ImageWithLink image_source="typescript" href="" image_custom="w-[100px]" />
          <a href="" className="p-2 hover:text-[var(--active-text)] hover:bg-[var(--active-bg)] hover:cursor-pointer rounded-md w-[100px]">- Java</a>
          <a href="" className="p-2 hover:text-[var(--active-text)] hover:bg-[var(--active-bg)] hover:cursor-pointer rounded-md w-[175px]">- TypeScript</a>
          <a href="" className="p-2 hover:text-[var(--active-text)] hover:bg-[var(--active-bg)] hover:cursor-pointer rounded-md w-[150px]">- Python</a>
        </div>
      </code>

      <h1 className="text-xl"> Tooling </h1>
      <Divider color="intro" className="w-[100px] justify-center mt-0 !ml-0" />
      <div>
        Qlty
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <h1 className="text-xl">Text Editors</h1>
          <Divider color="intro" className="w-[175px] justify-center mt-2 !ml-0" />
        </div>
        <img src={"https://download.logo.wine/logo/Vim_(text_editor)/Vim_(text_editor)-Logo.wine.png"} alt="Vim" className="w-[150px] h-[100px]" />
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1680px-Neovim-mark.svg.png"} alt="Vim" className="w-[50px] h-[50px]" />
      </div>
      <div>
        I us to use IntelliJ/VsCode and currently I've been using Neovim/Vim (over a year now)
      </div>

      <h1 className="text-xl">Operating Systems</h1>
      <Divider color="intro" className="w-[240px] justify-start mt-0 !ml-0" />
      <div>

        <ul className="flex flex-col gap-4">
          <code className="bg-[var(--bg-secondary)] rounded-md p-2 mr-8 text-[var(--text-secondary)]">
            <li className='p-2 flex gap-4 items-center'>- Arch <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Arch_Linux_%22Crystal%22_icon.svg" alt="Arch" className="w-[50px] h-[50px]" /></li>
            <li className='p-2 flex gap-4 items-center'>- MacOS <img src="https://cdn-icons-png.flaticon.com/512/2/2235.png" alt="MacOS" className="w-[50px] h-[50px]" /></li>
            <li className='p-2 flex gap-4 items-center'>- Windows <img src="https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png" alt="" className="w-[50px] h-[50px]" /></li>
          </code>
        </ul>
      </div>

      <h1 className="text-xl">Mathematics</h1>
      <Divider color="intro" className="w-[155px] justify-start mt-0 !ml-0" />
      <div className="flex flex-col gap-2">


        <ul>
          <li>- Logic</li>
          <li>- Set Theory</li>
          <li>- Boolean Algebra</li>
        </ul>
      </div>

      <h1 className="text-xl">Music</h1>
      <Divider color="intro" className="w-[75px] justify-start mt-0 !ml-0" />
      <div>
        In my spare time I enjoy making <a href="https://open.spotify.com/artist/3tDv971K0ps2UBd2kaFPiJ" className="text-[var(--accent)] hover:text-[var(--active-text)]">music</a>, and listening to music.
      </div>


      <h1 className="text-xl">Education</h1>
      <Divider color="intro" className="w-[100px] justify-start mt-0 !ml-0" />
      <div>
        I'm currently trying to do research with <a href="https://prl.khoury.northeastern.edu/">NEU Programming</a> language lab
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

        <div className="p-4">
          <input type="text" className="rounded-md w-full" />
          <button type="submit" className="mt-2 bg-[var(--accent)] hover:bg-[var(--active-bg)] text-[var(--text)] hover:text-[var(--active-text)] rounded-md px-4 py-2">Submit</button>
        </div>
      </div>
    </div>
  );
};
