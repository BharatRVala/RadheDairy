'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when starting the form submission

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setResponseMessage(data.message);
      toast.success('Message sent successfully!'); // Success notification
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setResponseMessage(data.error || 'Something went wrong');
      toast.error(data.error || 'Error sending message'); // Error notification
    }

    setLoading(false); // Set loading to false after processing the response
  };

  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <p>contact form</p>
        <h1>Have a question? Contact us now</h1>
        <p>
          Our service allows you to hide your geolocation, bypass blocking and
          protect your data. Join over 150 thousand people who trust us to keep
          their life safe.
        </p>
        <div>
          <p>📞 +91 9998021796</p>
          <p>📧 contact@interngalaxy.in</p>
          <p>📍 Ahmedabad, Gujarat</p>
        </div>
      </div>

      <div className="contactForm">
        <div className="contact-form-title">
          <h1>Contact Form</h1>
        </div>

        <form className="input-wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            required
          />
          <textarea
            className="textarea"
            rows="4"
            cols="50"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="MESSAGE"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>

      {/* Toastify ToastContainer component */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default ContactInfo;
