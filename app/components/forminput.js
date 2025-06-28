'use client'

import { useState } from 'react';

function MyForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    interests: [],
    country: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormState(prev => {
      const newInterests = checked
        ? [...prev.interests, value]
        : prev.interests.filter(item => item !== value);
      return { ...prev, interests: newInterests };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Submit logic here
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h2 className='form-title'>Registration Form</h2>
      
      {/* Text Input */}
      <div className='username-input'>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formState.username} 
          onChange={handleInputChange}
        />
      </div>
      
      {/* Email Input */}
      <div className='email-input'>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formState.email} 
          onChange={handleInputChange}
          required
        />
      </div>
      
      {/* Password Input */}
      <div className='password-input'>
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formState.password} 
          onChange={handleInputChange}
          minLength="8"
        />
      </div>
      
      {/* Radio Buttons */}
      <div className='gender-input'>
        <span>Gender:</span>
        <input 
          type="radio" 
          id="male" 
          name="gender" 
          value="male" 
          checked={formState.gender === 'male'}
          onChange={handleInputChange}
        />
        <label htmlFor="male">Male</label>
        
        <input 
          type="radio" 
          id="female" 
          name="gender" 
          value="female" 
          checked={formState.gender === 'female'}
          onChange={handleInputChange}
        />
        <label htmlFor="female">Female</label>
      </div>
      
      
      
      {/* Select Dropdown */}
      <div className='country-input'>
        <label htmlFor="country">Country:</label>
        <select 
          id="country" 
          name="country" 
          value={formState.country} 
          onChange={handleInputChange}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
        </select>
      </div>
      
      
      
      {/* Submit Button */}
      <button className='submit-button' type="submit">Submit Form</button>
    </form>
  );
}

export default MyForm;