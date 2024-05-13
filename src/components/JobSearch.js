import React, { useState } from 'react';

const JobSearch = () => {
  const [searchField, setSearchField] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    // Replace '/api/jobs/search' with your actual endpoint
    const response = await fetch(`/api/jobs/search?field=${searchField}`, { method: 'GET' });
    const data = await response.json();
    console.log(data); // Display the job listings or update state to render them
  };
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmitResume = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('resume', selectedFile);
  
    // Replace '/api/resumes/upload' with your actual endpoint
    const response = await fetch(`/api/resumes/upload?field=${searchField}`, {
      method: 'POST',
      body: formData, // No headers needed as FormData sets the correct Content-Type
    });
    const data = await response.json();
    console.log(data); // Handle response
  };
  
  return (
    <div style={styles.jobSearchContainer}>
      <div style={styles.formContainer}>
        <h2>Job Search & Resume Upload</h2>
        <form onSubmit={handleSearch} style={styles.form}>
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            style={styles.select}
            required
          >
            <option value="">Select Job Field</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Data Science">Data Science</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="other">other</option>
          </select>
         
        </form>
        {searchField && (
          <form onSubmit={handleSubmitResume} style={styles.form}>
            <input 
              type="file" 
              onChange={handleFileChange} 
              accept=".pdf,.doc,.docx" 
              style={styles.input}
              required 
            />
            <button type="submit" style={styles.button}>Upload Resume</button>
          </form>
        )}
      </div>
    </div>
  );
};

// CSS in JS styles
const styles = {
  jobSearchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    textAlign: 'center',
    '@media (max-width: 768px)': { // Adapt syntax based on your CSS-in-JS solution
      padding: '0 10px' // Reduce padding on smaller screens
    }
  },
  
  form: {
    margin: '20px 0'
  },
  // Add to your styles object
  inputFocus: {
  outline: '2px solid #0056b3' // Or another color that matches your design
  },
  selectFocus: {
  outline: '2px solid #0056b3'
  },

  select: {
    marginRight: '8px',
    padding: '8px',
    width: 'auto',
  },
  input: {
    marginRight: '8px',
    padding: '8px',
  },
  // Modify the existing button style
 button: {
  padding: '8px 16px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  transition: 'background-color 0.2s', // Smooth transition for background color
  '&:hover': { // This pseudo-selector might not work directly in CSS-in-JS. Adapt based on your setup.
    backgroundColor: '#0056b3'
  }
}

};

export default JobSearch;
