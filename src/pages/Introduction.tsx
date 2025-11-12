import { BreadcrumbButton } from '../components/buttons/';
import { ThemeToggle } from '../components/ThemeToggle';
import { Download, Linkedin, Github, Twitter} from 'lucide-react';


const GITHUB_PROFILE = "https://github.com/TuringProblem";

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

        <div className="flex-col bg-[var(--bg-secondary)]] border border-[var(--border)] border-radius-[var(--terminal-radius)] rounded-md shadow-lg">

          <div className="py-10 flex justify-between">
            <h1 className="text-4xl max-w-[300px] font-bold text-[var(--text-primary)] flex justify-between items-center">
              Welcome! 👋
            </h1>
            <div className="flex flex-col gap-2">
              <button className="flex gap-1" onClick={() => redirect(GITHUB_PROFILE)}>
                <Github size={24} /> Github Profile
              </button>
              <button className="flex gap-1">
                <Twitter size={24} /> (𝕏)* Account
              </button>
              <button className="flex gap-1">
                <Linkedin size={24} /> Linkedin
              </button>
              <button className="flex  gap-1">
                <Download size={24} /> Resume
              </button>
            </div>
            
            <img src="https://media.giphy.com/media/l0MYd5o7l9g8o/giphy.gif" alt="gif" className="w-full rounded-full w-[100px] h-[100px]" />
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

