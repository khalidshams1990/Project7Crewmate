// Home.jsx
import React from 'react';
import './App.css'; // Create and use Home.css if you need specific styles for the Home component

const Home = () => {
  return (
    <div className="main-content">
      <h1>Welcome to the Grand Line</h1>
      <p>List your pirate crew to enter the sea !!!</p>
      <img src="https://www.greenscene.co.id/wp-content/uploads/2020/06/Grand-Line.jpg" alt="Crewmates" className="centered-image" />
    </div>
  );
};

export default Home;
