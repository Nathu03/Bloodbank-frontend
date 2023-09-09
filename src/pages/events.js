import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the events data from the API
    axios.get('http://localhost:8000/api/v1/bloodbank/connect-to-frontend/events')
      .then((response) => {
        // Update the events state with the fetched data
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className="container mx-auto py-4 px-10 my-10">
      <h1 className="text-3xl font-bold mb-6">Event List</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => (
  <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
    <img
      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={event.imageUrl}
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {event.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {event.description}
      </p>
      <p className="text-gray-500 mb-2">
        <span className="font-medium">Date:</span> {event.date}
      </p>
      <p className="text-gray-500 mb-4">
        <span className="font-medium">Location:</span> {event.location}
      </p>
      <a
        href="#"
        className="btn btn-success"
      >
        Click here
      </a>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default EventList;
