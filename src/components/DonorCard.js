import React from 'react';

const DonorCard = ({ donor, handleContactClick, handleRequestClick }) => {
  const { name, bloodGroup, intro, age, image } = donor;

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{`Blood Group: ${bloodGroup}`}</p>
        <p className="text-sm text-gray-600 mb-4">{`Age: ${age}`}</p>
        <p className="text-sm text-gray-800">{intro}</p>
        <div className="flex mt-4 space-x-4">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            onClick={() => handleContactClick(name)}
          >
            Message
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-200"
            onClick={() => handleRequestClick(name)}
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
