import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Registartion/LandingPage.jsx';
import Registrationlayout from './Components/LayOuts/registrationlayout.jsx';
import Login from './Components/Registartion/Login.jsx';
import Signup from './Components/Registartion/Signup.jsx';
import PODashboard from './Components/ProductOwners/Dashboard/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/signup-page" element={<Signup />} />
          <Route path="/podashboard" element={<PODashboard />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
