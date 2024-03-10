import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Login as: ${role} with email: ${email}`);
    // Placeholder for authentication logic
    // Assume authentication is successful for demonstration

    // Based on the role, navigate to different pages
    if (role === 'student') {
      navigate('/Home'); // Navigate to the student dashboard or appropriate path
    } else if (role === 'recruiter') {
      navigate('/CandidateSelection'); // Navigate to the candidate selection page for recruiters
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
          </div>
          <div>
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
      <p style={{marginTop: '10px'}}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginPage;
