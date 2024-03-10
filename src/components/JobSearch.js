import React, { useState } from 'react';

const JobSearch = () => {
  const [searchField, setSearchField] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for jobs in field: "${searchField}"`);
    // Here, add your job search API call logic specific to the chosen field
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmitResume = (event) => {
    event.preventDefault();
    console.log(`Uploading resume for field: ${searchField}`, selectedFile);
    // Here, add logic to upload the resume file, typically involving a backend service
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
          </select>
          <button type="submit" style={styles.button}>Search Jobs</button>
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
  },
  form: {
    margin: '20px 0'
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
  button: {
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  }
};

export default JobSearch;
