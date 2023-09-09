import React, { useState } from 'react';

const DonateBlood = () => {
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bloodType: '',
    address: '',
    city: '',
    postalCode: '',
    imageFile: null,
    medicalDocument: '',
    bloodDonationCard: '',
    nicOrPassport: '',
  });

  const [errors, setErrors] = useState({});
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleChange = (e) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setDonorInfo({
        ...donorInfo,
        [field]: file,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!donorInfo.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!donorInfo.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!donorInfo.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!donorInfo.bloodType) {
      newErrors.bloodType = 'Blood type is required';
    }
    if (!donorInfo.address) {
      newErrors.address = 'Address is required';
    }
    if (!donorInfo.city) {
      newErrors.city = 'City is required';
    }
    if (!donorInfo.postalCode) {
      newErrors.postalCode = 'Postal code is required';
    }
    // if (!donorInfo.imageUpload) {
    //   newErrors.imageUpload = 'Your Image file is required';
    // }
    if (!donorInfo.medicalDocument) {
      newErrors.medicalDocument = 'Medical Document File is required';
    }
    if (!donorInfo.bloodDonationCard) {
      newErrors.bloodDonationCard = 'Blood Donation Card File is required';
    }
    if (!donorInfo.nicOrPassport) {
      newErrors.nicOrPassport = 'NIC or Passport number is required';
    } else if (!validateNicOrPassport(donorInfo.nicOrPassport)) {
      newErrors.nicOrPassport = 'Invalid NIC or Passport number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setDonorInfo({
        ...donorInfo,
        [field]: file,
      });
    }
  };

  const validateNicOrPassport = (value) => {
    // Implement your validation logic for Srilankan NIC and Passport here
    // Return true if valid, false otherwise
    // Example: Check for length and format
    return /^[0-9]{9}[VX]$/.test(value); // Example pattern for Srilankan NIC
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append('image', donorInfo.imageFile);
      formData.append('medicalDocument', donorInfo.medicalDocument);
      formData.append('bloodDonationCard', donorInfo.bloodDonationCard);

      Object.keys(donorInfo).forEach((key) => {
        if (
          key !== 'imageFile' &&
          key !== 'medicalDocument' &&
          key !== 'bloodDonationCard'
        ) {
          formData.append(key, donorInfo[key]);
        }
      });

      try {
        const response = await fetch('http://localhost:8000/api/v1/bloodbank/connect-to-frontend/blooddoners', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Registration success
          setRegistrationStatus('success');
          setDonorInfo({
            firstName: '',
            lastName: '',
            email: '',
            bloodType: '',
            address: '',
            city: '',
            postalCode: '',
            imageFile: null,
            medicalDocument: '',
            bloodDonationCard: '',
            nicOrPassport: '',
          });
          setErrors({});
        } else {
          // Registration failed
          setRegistrationStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error here
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Donate Blood</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1 font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={donorInfo.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"

          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1 font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={donorInfo.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"

          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={donorInfo.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"

          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="nicOrPassport" className="block mb-1 font-medium">
            NIC or Passport Number
          </label>
          <input
            type="text"
            id="nicOrPassport"
            name="nicOrPassport"
            value={donorInfo.nicOrPassport}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          {errors.nicOrPassport && (
            <p className="text-red-500">{errors.nicOrPassport}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="bloodType" className="block mb-1 font-medium">
            Blood Type
          </label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            value={donorInfo.bloodType}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"

          />
          {errors.bloodType && <p className="text-red-500">{errors.bloodType}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={donorInfo.address}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"

          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="city" className="block mb-1 font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={donorInfo.city}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"

            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block mb-1 font-medium">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={donorInfo.postalCode}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"

          />
          {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="imageUpload" className="block mb-1 font-medium">
            Upload your Image
          </label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-2"
          />
          {donorInfo.imageFile && (
            <img
              src={URL.createObjectURL(donorInfo.imageFile)}
              alt="Uploaded"
              className="max-w-full h-auto"
            />
          )}
          {/* {errors.imageUpload && <p className="text-red-500">{errors.imageUpload}</p>} */}
        </div>
        <div className="mb-4">
          <label htmlFor="medicalDocument" className="block mb-1 font-medium">
            Medical Document
          </label>
          <input
            type="file"
            id="medicalDocument"
            name="medicalDocument"
            accept="image/*, application/pdf"
            onChange={(e) => handleFileUpload(e, 'medicalDocument')}
            className="mb-2"
          />
          {errors.medicalDocument && <p className="text-red-500">{errors.medicalDocument}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="bloodDonationCard" className="block mb-1 font-medium">
            Blood Donation Card Scan Copy
          </label>
          <input
            type="file"
            id="bloodDonationCard"
            name="bloodDonationCard"
            accept="image/*, application/pdf"
            onChange={(e) => handleFileUpload(e, 'bloodDonationCard')}
            className="mb-2"
          />
          {errors.bloodDonationCard && <p className="text-red-500">{errors.bloodDonationCard}</p>}
        </div>
        {registrationStatus === 'success' && (
          <p className="text-green-500">Registration successful!</p>
        )}
        {registrationStatus === 'error' && (
          <p className="text-red-500">Registration failed. Please try again.</p>
        )}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-purple-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonateBlood;
