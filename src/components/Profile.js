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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization token if needed
        },
        body: JSON.stringify(profileData),
      });
      if (response.ok) {
        const updatedProfile = await response.json();
        console.log('Profile updated:', updatedProfile);
        // Handle successful profile update here (e.g., show a success message or navigate away)
      } else {
        // Handle errors (e.g., show error message)
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  

  return (
    <div className="profile-edit-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Your full name" />
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
