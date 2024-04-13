import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CrewmateDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const crewmate = location.state; // The state passed from the navigate function

  const handleUpdate = () => {
    // Navigate to the update crewmate page and pass the crewmate data
    navigate('/update-crewmate', { state: { ...crewmate } });
  };
  return (
    <div>
      <h2>{crewmate.name} Details</h2>
      <p>Age: {crewmate.age} years old</p>
      <p>Position: {crewmate.position}</p>
      <p>Color: {crewmate.color}</p>
      <button onClick={handleUpdate}>Update Crewmate</button> {/* Update button */}
    </div>
  );
};

export default CrewmateDetails;
