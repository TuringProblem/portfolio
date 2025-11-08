import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export const Introduction: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
        {/* Theme Toggle in top right */}
        <div className="absolute top-5 right-5">
          <ThemeToggle />
        </div>
        
        {/* Back Button in top left */}
        <div className="absolute top-5 left-5">
          <Link to="/">
            <button className="px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border)] rounded-md hover:bg-[var(--accent)] hover:text-[var(--active-text)] transition-all duration-300">
              ← Back
            </button>
          </Link>
        </div>
        
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Hello World
          </h1>
          <p className="text-[var(--text-secondary)]">
            Welcome to my portfolio introduction
          </p>
        </div>
      </div>
    </div>
  );
};

