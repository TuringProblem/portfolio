import { BreadcrumbButton } from '../../components/buttons/breadcrumb';
import { ThemeToggle } from '../../components/ThemeToggle';
import { Download, Linkedin, Github, Twitter } from 'lucide-react';
import { MainCard } from '../../components/cards';
import { MenuCard } from './components/cards/menu';


const GITHUB_PROFILE = "https://github.com/TuringProblem";
const TWITTER_PROFILE = "https://twitter.com/TuringProblem";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/andrew-wellington-37a665246/";

const redirect = (url: string) => {
  window.location.href = url;
}


export const Introduction: React.FC = () => {
  return (
    <div className="h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500 overflow-hidden">
      <div className="relative h-screen flex flex-col p-6">

        <div className="absolute top-5 right-5">
          <ThemeToggle />
        </div>

        <div className="absolute top-5 left-5">
          <BreadcrumbButton text="Back" />
        </div>

        <div className="bg-[var(--bg-secondary)] m-[0px_50px_0px_110px] border border-[var(--border)] border-radius-[var(--terminal-radius)] rounded-md shadow-lg">
          <div className="m-[0px_0px_0px_8px] flex ">
            Introduction/
          </div>
        </div>

        <div className="flex-col bg-[var(--bg-secondary)]]] ">


          {/* I'm going to break this up into a component so its cleaner to read */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 items-center gap-10 justify-items-center">
             <h1 className="text-[var(--legend-text)] text-4xl min-w-[250px] max-w-[300px] font-bold text-[var(--text-primary)] flex justify-between items-center">
              Welcome! 👋
            </h1>
            <div className="flex flex-col gap-2 min-w-[200px] max-w-[200px]">
              <button className="flex gap-1 hover:text-[var(--accent)]" onClick={() => redirect(GITHUB_PROFILE)}>
                <Github size={24} /> Github Profile
              </button>
              <button className="flex gap-1 hover:text-[var(--accent)]" onClick={() => redirect(TWITTER_PROFILE)}>
                <Twitter size={24} /> (𝕏)* Account
              </button>
              <button className="flex gap-1 hover:text-[var(--accent)]" onClick={() => redirect(LINKEDIN_PROFILE)}>
                <Linkedin size={24} /> Linkedin
              </button>
              <button className="flex  gap-1 hover:text-[var(--accent)]">
                <Download size={24} /> Resume
              </button>
            </div>

            <div className="my-6 max-w-[700px] min-w-[400px] text-sm text-[var(--accent)] bg-[var(--bg-secondary)] border border-[var(--accent)] shadow-lg rounded-lg">
              <div className="bg-[var(--border)] my-3.5 mx-3.5 align-center rounded-md">
                I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy. With respect to leasurely activities - I enjoy programming, <a href="https://">music</a>, and sports.
              </div>
            </div>

            <img src="https://i.imgur.com/Ofi28uY.gif" alt="gif" className="w-full rounded-full h-[250px] w-[250px]" />
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-[var(--text-secondary)]">
            <div className="max-w-[75vw]">

              <MenuCard title="hello" />
              This is my portfolio bitch, welcome to this place.

            </div>
            <MainCard title="Legend" className="w-[400px] h-[400px] justify-self-end mr-10">
              <div className="flex justify-center items-center">
                <button>👋</button>
              </div>
            </MainCard>
          </div>

        </div>

      </div>
    </div>
  );
};

