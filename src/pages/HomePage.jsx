
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='home-page'>
    <h1>Welcome to the Home Page</h1>
    <Link to="/profile">Go to Profile</Link>
  </div>
);

export default HomePage;