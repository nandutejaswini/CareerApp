import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.js';
import Home from './components/Home.js';
import JobSearch from './components/JobSearch.js';
import UploadResume from './components/UploadResume.js';
import LoginPage from './components/LoginPage.js';
import SignUp from './components/SignUp.js';
import Profile from './components/Profile.js';
import CandidateSelection from './components/CandidateSelection';
import ResetPassword from './components/ResetPassword.js';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/upload-resume" element={<UploadResume />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} /> {/* Updated route path */}
          <Route path="/profile" element={<Profile />} /> {/* Updated route path */}
          <Route path="/candidate-selection" element={<CandidateSelection />} /> {/* Updated route path */}
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
