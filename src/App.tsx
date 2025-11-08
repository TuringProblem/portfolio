import { ThemeToggle } from './components/ThemeToggle';
import { IntroButton } from './components/buttons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <ThemeToggle />
        </div>
        <h1>My Portfolio</h1>
        <IntroButton />
      </header>
    </div>
  );
}

export default App;