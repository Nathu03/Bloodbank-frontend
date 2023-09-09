import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Middle from './middle';
import Middletwo from './middletwo';
import Homepage from './homeheader';

const Home = () => {
  const bloodDonationImageUrl = '/images/blood-donation2.gif';
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // const handleLogout = async () => {
  //   try {
  //     await axios.post('http://localhost:8000/api/logout');
  //     setLoggedIn(false);
  //     setUserName('');
  //     // Redirect or perform any necessary cleanup after successful logout
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user');
        const { name } = response.data;
        setUserName(name);
        setLoggedIn(true);
      } catch (error) {
        // Handle error if user data cannot be fetched
      }
    };

    if (!loggedIn) {
      fetchUser();
    }
  }, [loggedIn]);

  return (
    <div className='bg-red-600'>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to the Blood Bank System</h2>
          </div>
        </div>
      </section>

      <div className="container mx-auto my-12"><Middle/></div>
      <div className="container mx-auto my-12"><Middletwo/></div>
    </div>
  );
};

export default Home;

