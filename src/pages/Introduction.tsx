import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export const Introduction: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      <div className="relative min-h-screen flex flex-col p-6">
        <div className="absolute top-5 right-5">
          <ThemeToggle />
        </div>
        
        <div className="absolute top-5 left-5">
          <Link to="/">
            <button className="px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border)] rounded-md hover:bg-[var(--accent)] hover:text-[var(--active-text)] transition-all duration-300">
              ← Back
            </button>
          </Link>
        </div>
        
        <div className="bg-[var(--bg-secondary)] m-[0px_50px_0px_110px] border border-[var(--border)] border-radius-[var(--terminal-radius)] rounded-md shadow-lg">
          hello
          </div>
          <div className="py-10">
            <h1 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Hello World
            </h1>
            <div className="text-[var(--text-secondary)]">
              Welcome to my portfolio introduction
            </div>
          </div>
        </div>
      </div>
  );
};

