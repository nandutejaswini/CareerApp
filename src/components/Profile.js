import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Initial state for the form, assuming a user is logged in and their data is loaded
  const [profileData, setProfileData] = useState({
    name: '',
    title: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileData);
    // Here you would send the profileData to the server to update the user's profile
    // This could be a PATCH or PUT request to a '/api/profile' endpoint
  };

  return (
    <div className="profile-edit-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={profileData.name} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={profileData.title} onChange={handleChange} />
        </label>
        <label>
          Summary:
          <textarea name="summary" value={profileData.summary} onChange={handleChange} />
        </label>
        <label>
          Experience:
          <textarea name="experience" value={profileData.experience} onChange={handleChange} />
        </label>
        <label>
          Education:
          <textarea name="education" value={profileData.education} onChange={handleChange} />
        </label>
        <label>
          Skills:
          <input type="text" name="skills" value={profileData.skills} onChange={handleChange} />
        </label>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
