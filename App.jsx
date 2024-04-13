import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import CreateCrewmate from './CreateCrewmate';
import CrewmateGallery from './CrewmateGallery';
import CrewmateDetails from './CrewmateDetails';
import UpdateCrewmate from './UpdateCrewmate';
import { supabase } from './client'; // Ensure this is the correct path to your Supabase client
import './App.css';

const App = () => {
  const [crewmates, setCrewmates] = useState([]);

  // Function to fetch crewmates from the database
  const fetchCrewmates = async () => {
    try {
      let { data, error, status } = await supabase
        .from('People') // Make sure this is the correct table name
        .select('*');

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCrewmates(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Fetch crewmates when component mounts
  useEffect(() => {
    fetchCrewmates();
  }, []);

  // Function to add a new crewmate (called from CreateCrewmate component)
  const addCrewmate = (newCrewmate) => {
    setCrewmates([...crewmates, newCrewmate]);
  };

  return (
    <Router>
      <div className='background'>
        <div className="App">
          <aside className="navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create-crewmate">Create a Crewmate</Link></li>
              <li><Link to="/crewmate-gallery">Crewmate Gallery</Link></li>
            </ul>
          </aside>
          <main className="main-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/create-crewmate" element={<CreateCrewmate addCrewmate={addCrewmate} />} />
              <Route path="/crewmate-gallery" element={<CrewmateGallery crewmates={crewmates} />} />
              <Route path="/crewmate-details" element={<CrewmateDetails />} />
              <Route path="/update-crewmate" element={<UpdateCrewmate />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
