import Demo from './Demo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
