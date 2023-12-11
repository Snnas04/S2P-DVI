import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../renders/home';
import Extra from '../renders/pages/extra';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </Router>
  );
};

export default App;
