import './CreateCrewmate.css'; // Ensure you have CSS for styling
import React, { useState } from 'react';
import { supabase } from './client'; // Adjust the path as needed

const CreateCrewmate = () => {
    // Initialize crewmate state with the new fields
    const [crewmate, setCrewmate] = useState({
        name: '',
        age: '',
        position: '',
        color: ''
    });

    // Handle changes in form inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate({ ...crewmate, [name]: value });
    };

    // Handle form submission to create a new crewmate
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const { data, error } = await supabase
            .from('People') // Ensure this matches your table name
            .insert([crewmate]);
      
          if (error) throw error;
      
          console.log('Crewmate created:', data);
          // Reset the crewmate state to clear the form fields
          setCrewmate({
            name: '',
            age: '',
            position: '',
            color: '',
          });
        } catch (error) {
          alert(`Error creating crewmate: ${error.message}`);
        }
      };

    return (

     <div className="create-crewmate-container">
      <div className="create-crewmate-header">
        <h2>Create a New Crewmate</h2>
        <img src="http://static.minitokyo.net/downloads/09/46/67309.jpg" alt="Crewmates" className="centered-image"/>
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

                <input type="submit" className="submit-button" value="Create Crewmate" />
            </form>
        </div>
    );
};

export default CreateCrewmate;
