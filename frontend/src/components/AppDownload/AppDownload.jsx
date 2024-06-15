import React, { useState } from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  const [contactMethod, setContactMethod] = useState('email');
  const [contactValue, setContactValue] = useState('');

  const handleContactMethodChange = (e) => {
    setContactMethod(e.target.value);
    setContactValue('');
  };

  const handleContactValueChange = (e) => setContactValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to send the app link, e.g., API call
    alert(`App link sent to ${contactValue}`);
  };

  return (
    <div className='app-download' id='app-download'>
      <p>Get the Tomato App</p>
      <p className="small-text">We will send you a link, open it on your phone to download the app</p>
      <form onSubmit={handleSubmit} className="app-download-form">
        <div className="contact-method">
          <label>
            <input
              type="radio"
              value="email"
              checked={contactMethod === 'email'}
              onChange={handleContactMethodChange}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              value="phone"
              checked={contactMethod === 'phone'}
              onChange={handleContactMethodChange}
            />
            Phone
          </label>
        </div>
        {contactMethod === 'email' ? (
          <input
            type="email"
            placeholder="Email"
            value={contactValue}
            onChange={handleContactValueChange}
            required
          />
        ) : (
          <input
            type="tel"
            placeholder="Phone"
            value={contactValue}
            onChange={handleContactValueChange}
            required
          />
        )}
        <button type="submit">Get Link</button>
      </form>
      <p className="download-text">Download app from</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Google Play Store" />
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </div>
  );
}

export default AppDownload;
