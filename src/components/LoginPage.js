import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUser, FaKey } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Replace with your actual backend endpoint for login
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
       
      if (response.ok) {
        //const data = await response.json();
        console.log('Response status:', response.status);

        console.log('Login successful:', data);
        // Assuming you want to navigate to a default page after login
        // Or handle different navigations based on logic you implement
        console.log("Ready to navigate");

        navigate('/job-search'); // Adjust as needed based on your routes
      } else {
        // Handle login failure
        console.error('Login failed:', data.message);
        // Optionally, show an error message to the user
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      console.error('Login error:', error);
    }
  };
  
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"><FaUser />Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password"><FaKey />Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </label>
        </div>
        <div className="role-selection">
          <div>
            <input
              type="radio"
              id="student"
              name="role"
              value="student"
              checked={role === 'student'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="student">Student</label>
          
          
            <input
              type="radio"
              id="recruiter"
              name="role"
              value="recruiter"
              checked={role === 'recruiter'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="recruiter">Recruiter</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      
        <p>Forgot your password? <a href="/reset-password">Click here</a></p>
        
      <p style={{marginTop: '10px'}}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginPage;

