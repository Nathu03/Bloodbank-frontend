import React, { useState } from 'react';
import axios from 'axios';
import { isPast, parseISO } from 'date-fns'; // Import necessary functions

const ScheduleEventForm = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [dateError, setDateError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDateChange = (inputDate) => {
    if (!isPast(parseISO(inputDate))) {
      setDateError('');
    } else {
      setDateError('Selected date is expired.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Title
    if (!title) {
      setTitleError('Please enter the title.');
    } else {
      setTitleError('');
    }

    // Validate Location
    if (!location) {
      setLocationError('Please enter the location.');
    } else {
      setLocationError('');
    }

    // Validate Date
    if (!date) {
      setDateError('Please enter the date.');
    } else if (!isPast(parseISO(date))) {
      setDateError('');
    } else {
      setDateError('Selected date is expired.');
    }

    // Validate Description
    if (!description) {
      setDescriptionError('Please enter the description.');
    } else {
      setDescriptionError('');
    }

    if (!title || !location || !date || !description) {
      setError('Please fill in all required fields.');
      setIsSuccess(false);
      return;
    }

    try {
      setError('');
      const response = await axios.post('http://127.0.0.1:8000/api/v1/bloodbank/connect-to-frontend/schedule-events', {
        title,
        location,
        date,
        description,
      });
      console.log('Schedule event created:', response.data);
      setIsSuccess(true);
    } catch (error) {
      setError('Error creating schedule event. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('images/wp4323461.webp')",
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        width: '100%',
        height: 'auto', // Set the desired height
      }}
    >
      <div className="container me-10 my-10 py-10">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Schedule Events</h2>
            {isSuccess && ( // Render the success message conditionally
              <div className="text-green-500 text-sm mb-4">Schedule event created successfully.</div>
            )}
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                {titleError && <div className="text-red-500 text-sm mt-1">{titleError}</div>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                {locationError && <div className="text-red-500 text-sm mt-1">{locationError}</div>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                {dateError && <div className="text-red-500 text-sm mt-1">{dateError}</div>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-32 resize-none bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                {descriptionError && <div className="text-red-500 text-sm mt-1">{descriptionError}</div>}
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-purple-600"
              >
                Create Schedule Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEventForm;
