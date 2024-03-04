import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScraperPage from './components/ScraperPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/scraper" element={<ScraperPage />} />
          {/* Define other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

