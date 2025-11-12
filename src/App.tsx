import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Introduction } from './pages/introduction';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<Introduction />} />
    </Routes>
  );
}

export default App;
