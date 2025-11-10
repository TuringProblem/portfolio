import { BreadcrumbButton } from '../components/buttons/';
import { ThemeToggle } from '../components/ThemeToggle';

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
        <div className="py-10 flex flex-col">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] flex justify-between items-center">
            Welcome! 👋
          <img src="https://media.giphy.com/media/l0MYd5o7l9g8o/giphy.gif" alt="gif" className="w-full rounded-full w-[100px] h-[100px]" />
          </h1>
          <div className="text-[var(--text-secondary)]">
            Welcome to my portfolio introduction
          </div>
        </div>
      </div>
    </div>
  );
};

