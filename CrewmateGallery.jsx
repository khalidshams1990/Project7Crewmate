import React from 'react';
import './CrewmateGallery.css'; // Make sure to create a corresponding CSS file
import { useNavigate } from 'react-router-dom';

const CrewmateGallery = ({ crewmates }) => {
    let navigate = useNavigate();
    
    const handleDetails = (crewmate) => {
      // Navigate to the crewmate details page and pass the crewmate data
      navigate('/crewmate-details', { state: { ...crewmate } });
    };
    return (
      <div className="crewmate-gallery">
        {crewmates.length > 0 ? (
          crewmates.map((crewmate, index) => (
            <div key={index} className="crewmate-card">
            <h3>{crewmate.name}</h3>
            <p>Age: {crewmate.age} years old</p>
            
            {/* Add more details as needed */}
            <button onClick={() => handleDetails(crewmate)}>Details</button> {/* Details button */}
          </div>
        ))
      ) : (
        <p>You haven't made a crewmate yet!</p>
      )}
    </div>
  );
};

export default CrewmateGallery;
