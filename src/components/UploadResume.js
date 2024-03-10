import React, { useState } from 'react';

const UploadResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload');
      return;
    }
    
    // Here, you would typically handle the file upload process
    // For demonstration, let's just log the file name
    console.log(`Uploading file: ${selectedFile.name}`);
    // Reset selected file
    setSelectedFile(null);
  };

  return (
    <div className="upload-resume-container">
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadResume;
