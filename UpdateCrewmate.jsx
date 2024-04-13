import './CreateCrewmate.css'; // Ensure you have CSS for styling
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from './client'; // Make sure this path is correct

const UpdateCrewmate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(location.state);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrewmate({ ...crewmate, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
        .from('People') // Replace with your actual table name
        .update({ ...crewmate })
        .match({ id: crewmate.id }); // Replace with the actual primary key or unique identifier

      if (error) throw error;

      // If the update is successful, navigate to the gallery or detail page
      navigate('/crewmate-gallery');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this crewmate?');
    if (confirmDelete) {
      try {
        const { error } = await supabase
          .from('People') // Replace with your actual table name
          .delete()
          .match({ id: crewmate.id }); // Use the correct identifier for your crewmate

        if (error) throw error;

        // Navigate to the gallery or home page after deletion
        navigate('/crewmate-gallery');
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="create-crewmate-container">
      <div className="create-crewmate-header">
        <h2>Update Crewmate</h2>
        <img src="http://static.minitokyo.net/downloads/09/46/67309.jpg" alt="Crewmates" className="centered-image"/>
      </div>
      <div>
      <h2>Update {crewmate.name}</h2>
      <p>Age: {crewmate.age} years old</p>
      <p>Position: {crewmate.position}</p>
      <p>Color: {crewmate.color}</p>
    </div>
    <form className="create-crewmate-form" onSubmit={handleSubmit}>
    <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={crewmate.age} onChange={handleChange} />
                </div>

                <div className="form-group">
        <label>Position:</label>
        <div className="radio-group">
        <label>
      <input type="radio" id="positionCaptain" name="position" value="Captain" onChange={handleChange} checked={crewmate.position === 'Captain'} />
      Captain
    </label>
    <label>
      <input type="radio" id="positionSwordsman" name="position" value="Swordsman" onChange={handleChange} checked={crewmate.position === 'Swordsman'} />
      Swordsman
    </label>
    <label>
      <input type="radio" id="positionNavigator" name="position" value="Navigator" onChange={handleChange} checked={crewmate.position === 'Navigator'} />
      Navigator
    </label>
    <label>
      <input type="radio" id="positionEngineer" name="position" value="Engineer" onChange={handleChange} checked={crewmate.position === 'Engineer'} />
      Engineer
    </label>
    <label>
      <input type="radio" id="positionDoctor" name="position" value="Doctor" onChange={handleChange} checked={crewmate.position === 'Doctor'} />
      Doctor
    </label>
    <label>
      <input type="radio" id="positionCook" name="position" value="Cook" onChange={handleChange} checked={crewmate.position === 'Cook'} />
      Cook
    </label>
    <label>
      <input type="radio" id="positionShipwright" name="position" value="Shipwright" onChange={handleChange} checked={crewmate.position === 'Shipwright'} />
      Shipwright
    </label>
    <label>
      <input type="radio" id="positionMusician" name="position" value="Musician" onChange={handleChange} checked={crewmate.position === 'Musician'} />
      Musician
    </label>
    <label>
      <input type="radio" id="positionHistorian" name="position" value="Historian" onChange={handleChange} checked={crewmate.position === 'Historian'} />
      Historian
    </label>
  </div>
</div>

<div className="form-group">
        <label>Color:</label>
        <div className="radio-group">
        <label>
      <input type="radio" id="colorRed" name="color" value="Red" onChange={handleChange} checked={crewmate.color === 'Red'} />
      Red
    </label>
    <label>
      <input type="radio" id="colorGreen" name="color" value="Green" onChange={handleChange} checked={crewmate.color === 'Green'} />
      Green
    </label>
    <label>
      <input type="radio" id="colorBlue" name="color" value="Blue" onChange={handleChange} checked={crewmate.color === 'Blue'} />
      Blue
    </label>
    <label>
      <input type="radio" id="colorPurple" name="color" value="Purple" onChange={handleChange} checked={crewmate.color === 'Purple'} />
      Purple
    </label>
    <label>
      <input type="radio" id="colorPink" name="color" value="Pink" onChange={handleChange} checked={crewmate.color === 'Pink'} />
      Pink
    </label>
    <label>
      <input type="radio" id="colorBrown" name="color" value="Brown" onChange={handleChange} checked={crewmate.color === 'Brown'} />
      Brown
    </label>
    <label>
      <input type="radio" id="colorYellow" name="color" value="Yellow" onChange={handleChange} checked={crewmate.color === 'Yellow'} />
      Yellow
    </label>
    <label>
      <input type="radio" id="colorOrange" name="color" value="Orange" onChange={handleChange} checked={crewmate.color === 'Orange'} />
      Orange
    </label>
    <label>
      <input type="radio" id="colorBlack" name="color" value="Black" onChange={handleChange} checked={crewmate.color === 'Black'} />
      Black
    </label>
        </div>
      </div>
      
      <input type="submit" className="submit-button" value="Update Crewmate" />
      <button type="button" className="delete-button" onClick={handleDelete}>
          Delete Crewmate  </button>
            </form>
    </div>

    
  );
};

export default UpdateCrewmate;
