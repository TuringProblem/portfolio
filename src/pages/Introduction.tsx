import { BreadcrumbButton } from '../components/buttons/';
import { ThemeToggle } from '../components/ThemeToggle';
import { Download, Linkedin, Github, Twitter} from 'lucide-react';


const GITHUB_PROFILE = "https://github.com/TuringProblem";
const TWITTER_PROFILE = "https://twitter.com/TuringProblem";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/andrew-wellington-37a665246/";

const redirect = (url: string) => {
  window.location.href = url;
}

export const Introduction: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      <div className="relative min-h-screen flex flex-col p-6">
        <div className="absolute top-5 right-5">
          <ThemeToggle />
        </div>

        <div className="absolute top-5 left-5">
          <BreadcrumbButton text="Back"/>
        </div>

        <div className="bg-[var(--bg-secondary)] m-[0px_50px_0px_110px] border border-[var(--border)] border-radius-[var(--terminal-radius)] rounded-md shadow-lg">
          <div className="m-[0px_0px_0px_8px] flex ">
            Introduction/
          </div>
        </div>

        <div className="flex-col bg-[var(--bg-secondary)]]] ">

          <div className="py-10 flex justify-between">
            <h1 className="text-4xl max-w-[300px] font-bold text-[var(--text-primary)] flex justify-between items-center">
              Welcome! 👋
            </h1>
            <div className="flex flex-col gap-2">
              <button className="flex gap-1" onClick={() => redirect(GITHUB_PROFILE)}>
                <Github size={24} /> Github Profile
              </button>
              <button className="flex gap-1" onClick={() => redirect(TWITTER_PROFILE)}>
                <Twitter size={24} /> (𝕏)* Account
              </button>
              <button className="flex gap-1" onClick={() => redirect(LINKEDIN_PROFILE)}>
                <Linkedin size={24} /> Linkedin
              </button>
              <button className="flex  gap-1">
                <Download size={24} /> Resume
              </button>
            </div>
            
            <div className="mt-6 max-w-[700px] min-w-[400px] text-sm text-[var(--accent)] bg-[var(--bg-secondary)] border border-[var(--accent)] shadow-lg rounded-lg">
            <div className="bg-[var(--border)] mt-3.5 mx-4 align-center rounded-md">
              I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy. With respect to leasurely activities - I enjoy programming, <a href="https://">music</a>, and sports.   
            </div>
            </div>
            <img src="https://media.giphy.com/media/l0MYd5o7l9g8o/giphy.gif" alt="gif" className="w-full rounded-full w-[150px] h-[150px]" />
          </div>
          <div className="text-[var(--text-secondary)]">
              <div className="max-w-[75vw]">
                This is my portfolio bitch, welcome to this place. 
              </div>
          </div>

        </div>

      </div>
    </div>
  );
};

