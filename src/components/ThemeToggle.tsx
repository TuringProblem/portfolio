import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      className={`theme-toggle-button ${isAnimating ? 'animating' : ''}`}
      onClick={handleClick}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="icon-container">
        <Sun 
          size={20} 
          className={`icon sun-icon ${theme === 'dark' ? 'visible' : 'hidden'}`}
        />
        <Moon 
          size={20} 
          className={`icon moon-icon ${theme === 'light' ? 'visible' : 'hidden'}`}
        />
      </div>
    </button>
  );
}

