import React, { useState } from 'react';
import './Contact.css'; // Assuming you want to use separate CSS files
import image from "./many-transport-trucks-parked-service-station-sunset-ai-generative.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mail: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // State to show loading animation
  const [submitted, setSubmitted] = useState(false); // State to show thank you message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation when submitting
    try {
      // Prepare form data for submission
      const form = new FormData();
      form.append('name', formData.name);
      form.append('phone', formData.phone);
      form.append('mail', formData.mail);
      form.append('message', formData.message);
      form.append('access_key', 'dac2c29c-df63-4f86-9efb-925740290f61'); // your Web3Forms API key
  
      const json = JSON.stringify(Object.fromEntries(form));
  
      // API call
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });
  
      const result = await res.json();
      if (result.success) {
        console.log('Success:', result);
        setSubmitted(true); // Show thank you message after success
        // Reset form after success
        setFormData({
          name: '',
          phone: '',
          mail: '',
          message: '',
        });
      } else {
        console.error('Error:', result.message);
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="centre-cnt">
      <div className="left-img">
        <img src={image} alt="trucks" />
      </div>
      <div className="right-img">
        {!submitted ? (
          <form className="app-contact-form" onSubmit={handleSubmit}>
           <h2 className="app-contact-title">
  <span style={{ color: "#6F1D1B" }}>Contact</span> <span style={{ color: "#000" }}>Us</span>
</h2>


            <div className="app-form-row">
              <div className="app-form-groups">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="app-form-input"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="app-form-groups">
                <label htmlFor="phone">Phone-no</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="app-form-input"
                  placeholder="Phone"
                   maxlength="10"
                  required
                />
              </div>
            </div>

            <div className="app-form-group">
              <label htmlFor="mail">Mail-ID</label>
              <input
                type="email"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="app-form-input-mail"
                placeholder="Email"
                required
              />
            </div>

            <div className="app-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="app-form-textarea"
                placeholder="Your message"
                required
              />
            </div>

            <button type="submit" className="app-submit-btn" disabled={loading}>
              {loading ? (
                <span className="loading-text">Loading</span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you for contacting us!</h2>
            <p>We will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
