import React from 'react';

const ChangePasswordForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password change logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
