import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/registartion/LandingPage.jsx';
import Registrationlayout from './Components/layouts/registrationlayout.jsx';
import Login from './Components/registartion/Login.jsx';
import Signup from './Components/registartion/Signup.jsx';
import PODashboard from './Components/ProductOwners/Dashboard/Dashboard.jsx';
import NavBarLayout from './Components/layouts/NavBarLayout.jsx';
import HomePagesLayout from './Components/layouts/HomePagesLayout.jsx';
import ListView from './Components/ProductOwners/ProductsHistory/ListView.jsx';
import store from './store.js';

function App() {
  
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/" element={<HomePagesLayout />}>
              <Route path="/login-page" element={<Login />} />
              <Route path="/signup-page" element={<Signup />} />
          </Route>

          <Route path="/" element={<NavBarLayout />}>
            <Route path="/podashboard" element={<PODashboard />} />
            <Route path="/product-history" element={<ListView />} />
          </Route>

        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
