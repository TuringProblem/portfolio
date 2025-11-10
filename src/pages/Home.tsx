import { ThemeToggle } from '../components/ThemeToggle';
import { IntroButton } from '../components/buttons';

export const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <ThemeToggle />
        </div>
        <div className="gap-10">
          <h1 className="">My Portfolio</h1>
          <IntroButton />
        </div>
      </header>
    </div>
  );
};

