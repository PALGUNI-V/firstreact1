
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedUser = { name: 'Palguni.V.Kumar', age: 20 };
    setUser(fetchedUser);
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='profile-page'>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>I am a student of SIT,studying 2nd year BE from department of CSE</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default ProfilePage;