import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent resubmission while the previous request is still processing
    if (isSubmitting) return;

    // Prepare the data object to send to the server
    const formData = {
      name: name,
      email: email,
    };

    // Set the form to the submitting state
    setIsSubmitting(true);
    setSubmissionError(null);

    // Make a POST request to the Laravel API endpoint
    axios.post('http://localhost:8000/api/contacts', formData)

      .then((response) => {
        // Handle successful response
        console.log('Contact data sent successfully:', response.data);
        setSubmissionSuccess(true);

        // Clear the form fields after successful submission
        setName('');
        setEmail('');

        // Reset the submitting state after a short delay (optional)
        setTimeout(() => setIsSubmitting(false), 1500);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error sending contact data:', error);
        setSubmissionError('Error sending contact data.');

        // Reset the submitting state after a short delay (optional)
        setTimeout(() => setIsSubmitting(false), 1500);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {submissionSuccess && <p>Form submitted successfully!</p>}
      {submissionError && <p>{submissionError}</p>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default Form;
