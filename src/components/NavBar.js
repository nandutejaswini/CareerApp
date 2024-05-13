import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftNav}>
        <Link to="/" style={styles.link}>Home</Link>
      </div>
      <div style={styles.rightNav}>
        <Link to="/candidate-selection" style={styles.link}>CandidateSelection</Link>
        <Link to="/job-search" style={styles.link}>JobSearch</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        
       
      </div>
    </nav>
  );
};

// Updated CSS in JS styles for navbar and link elements
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between', // Adjusted for space between left and right nav
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '10px 0'

  },
  leftNav: {
    // No specific styles needed here unless you want to further style the Home link container
  },
  rightNav: {
    display: 'flex',
    justifyContent: 'flex-end', // This ensures right alignment of the links
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    marginLeft: '10px', // Adds some space between the right-aligned links
  }
};

  
export default Navbar;
