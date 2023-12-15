import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../renders/home';
import Extra from '../renders/pages/extra';
import APIPage from '../renders/pages/apiPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/apiPage" element={<APIPage />} />
      </Routes>
    </Router>
  );
};

export default App;
