import React, { useState } from 'react';

const NotificationPreferencesForm = () => {
  const [enableEmail, setEnableEmail] = useState(true);
  const [enablePush, setEnablePush] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement notification preferences update logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableEmail"
            className="h-4 w-4 text-indigo-600 focus:ring focus:ring-indigo-300"
            checked={enableEmail}
            onChange={() => setEnableEmail((prev) => !prev)}
          />
          <label htmlFor="enableEmail" className="ml-2 block text-sm font-medium text-gray-700">
            Enable Email Notifications
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enablePush"
            className="h-4 w-4 text-indigo-600 focus:ring focus:ring-indigo-300"
            checked={enablePush}
            onChange={() => setEnablePush((prev) => !prev)}
          />
          <label htmlFor="enablePush" className="ml-2 block text-sm font-medium text-gray-700">
            Enable Push Notifications
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default NotificationPreferencesForm;
