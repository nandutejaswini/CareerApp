import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'; 
import './LoginPage.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
  
    try {
      const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Assuming the backend responds with the registered user's data
        const data = await response.json();
        console.log('Registration successful:', data);
  
        // Navigate to the job search page on successful sign-up
        navigate('/job-search'); // Make sure the route is defined in your React Router setup
      } else {
        // If the backend responds with an error status code
        const error = await response.json();
        console.error('Sign-up failed:', error);
        // Handle sign-up failure (e.g., show error message to the user)
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      console.error('Registration error:' , error);
    }
  };
  

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"><FaUserAlt /> Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"><FaEnvelope /> Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><FaLock /> Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
