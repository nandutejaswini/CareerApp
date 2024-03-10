import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to JobFinder</h1>
      <p>Your one-stop destination for finding your dream job or your next great hire.</p>
      <div style={{ marginTop: '40px' }}>
        <h2>How It Works</h2>
        <p>For Job Seekers: Search for jobs, upload your resume, and apply with just a few clicks.</p>
        <p>For Employers: Post job vacancies, browse through resumes, and find your ideal candidate.</p>
      </div>
    </div>
  );
};

export default Home;
