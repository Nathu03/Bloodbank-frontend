import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonorCard = ({ donor, handleContactClick, handleRequestClick }) => {
  const {
    firstName,
    lastName,
    email,
    bloodType,
    address,
    city,
    postalCode,
    imageUpload,
    medicalDocument,
    bloodDonationCard,
    nicOrPassport,
  } = donor;

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={imageUpload} alt={`${firstName} ${lastName}`} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{`${firstName} ${lastName}`}</h2>
        <p className="text-sm text-gray-600 mb-4">{`Blood Group: ${bloodType}`}</p>
        <p className="text-sm text-gray-600 mb-4">{`Address: ${address}, ${city}, ${postalCode}`}</p>
        <p className="text-sm text-gray-600 mb-4">{`Email: ${email}`}</p>
        <p className="text-sm text-gray-800">{`NIC or Passport: ${nicOrPassport}`}</p>
        <div className="flex mt-4 space-x-4">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            onClick={handleContactClick}
          >
            Message
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-200"
            onClick={handleRequestClick}
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

const EventList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Fetch the donors data from the API
    axios.get('http://127.0.0.1:8000/api/v1/bloodbank/connect-to-frontend/blood-doners')
      .then((response) => {
        // Log the received data
        console.log('Fetched donors data:', response.data);
  
        // Update the donors state with the fetched data
        setDonors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching donors:', error);
      });
  }, []);

  // Define the handleContactClick function
  const handleContactClick = (name) => {
    // Do something when contact is clicked
    console.log(`Contact clicked for ${name}`);
  };

  const handleRequestClick = (name) => {
    // Do something when request is clicked
    console.log(`Request clicked for ${name}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 me-5 py-5 px-10 my-5">
      {donors.map((donor) => (
        <DonorCard
          key={donor.id}
          donor={donor}
          handleContactClick={() => handleContactClick(donor.name)}
          handleRequestClick={() => handleRequestClick(donor.name)}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-red-700 text-white py-4 text-center">
        <h1 className="text-2xl font-semibold">Blood Donors List</h1>
      </header>
      <main className="container mx-auto pt-8">
        <EventList />
      </main>
    </div>
  );
};

export default App;
