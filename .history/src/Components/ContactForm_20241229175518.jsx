import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'your_service_id', // Replace with your EmailJS Service ID
        'your_template_id', // Replace with your EmailJS Template ID
        event.target, // The form element
        'your_user_id' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          alert('Failed to send email. Please try again.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Your Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Your Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
