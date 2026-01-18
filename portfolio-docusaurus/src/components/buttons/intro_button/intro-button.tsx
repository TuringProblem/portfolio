import { Link } from 'react-router-dom';

export const IntroButton: React.FC = () => {
  return (
    <Link to="/intro">
      <button className="px-3 py-2 mt-2 bg-[var(--accent)] text-[var(--active-text)] rounded-lg font-semibold hover:opacity-80 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
        Click to Enter
      </button>
    </Link>
  );
};
