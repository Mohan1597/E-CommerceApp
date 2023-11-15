import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Registartion/HomePage.jsx';
import Registrationlayout from './Components/LayOuts/registrationlayout.jsx';
import Login from './Components/Registartion/Login.jsx';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login-page" element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
