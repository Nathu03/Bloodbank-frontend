import React from 'react';
import ChangePasswordForm from '../components/ChangePasswordForm';
import NotificationPreferencesForm from '../components/NotificationPreferencesForm';

const SettingsPage = () => {
  return (
    <div className="container mx-auto py-8 px-10 my-10">
      <h1 className="text-3xl font-semibold mb-8">Settings</h1>
      <ChangePasswordForm />
      <NotificationPreferencesForm />
    </div>
  );
};

export default SettingsPage;
