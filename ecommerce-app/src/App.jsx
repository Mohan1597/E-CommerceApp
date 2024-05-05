import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Registartion/LandingPage.jsx';
import ListView from './Components/product-owners/products-history/ListView.jsx';
import HomePagesLayout from './Components/LayOuts/HomePagesLayout.jsx'
import store from './store.js';
import PODashboard from '../src/Components/product-owners/dashboard/Dashboard.jsx'
import Login from './Components/Registartion/Login.jsx';
import Signup from './Components/Registartion/Signup.jsx';
import NavBarLayout from './Components/LayOuts/NavBarLayout.jsx';

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
