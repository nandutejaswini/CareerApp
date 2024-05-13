import React, { useState } from 'react';
import './LoginPage.css';

const CandidateSelection = () => {
  // Initial mock data for candidates
  const [candidates] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Software Developer', skills: 'JavaScript, React', resumeLink: '/resumes/alice-johnson.pdf' },
    { id: 2, name: 'Bob Smith', role: 'Data Scientist', skills: 'Python, Machine Learning', resumeLink: '/resumes/bob-smith.pdf' },
    // Add more candidates as needed
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter candidates based on search query
  const filteredCandidates = candidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="candidate-container"> {/* Changed to use className for styling */}

      <h2>Select a Candidate</h2>
      <input 
        type="text" 
        placeholder="Search by name, role, or skills" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        style={{marginBottom: '20px', padding: '10px', width: '100%'}}
      />
      <ul>
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map(candidate => (
            <li key={candidate.id}>
              {candidate.name} - {candidate.role} - {candidate.skills}
              <a href={candidate.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a>
            </li>
          ))
        ) : (
          <p>No candidates found.</p>
        )}
      </ul>
    </div>
  );
};

export default CandidateSelection;
