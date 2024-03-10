import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.js';
import Home from './components/Home.js';
import JobSearch from './components/JobSearch.js';
import UploadResume from './components/UploadResume.js';
import LoginPage from './components/LoginPage.js'; // Make sure to import LoginPage
import SignUp from './components/SignUp.js';
import Profile from './components/Profile.js';
import CandidateSelection from './components/CandidateSelection';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-search" element={<JobSearch />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/login" element={<LoginPage />} /> {/* Add this line */}
        <Route path="/SignUp" element={<SignUp />} /> {/* Add this line */}
        <Route path="/Profile" element={<Profile />} /> {/* Add this line */}
        <Route path="/CandidateSelection" element={<CandidateSelection />} /> {/* Add this line */}

        


      </Routes>
    </Router>
  );
}

export default App;
