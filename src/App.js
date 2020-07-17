import React from 'react';
import './App.css';


//Components

import LandingSection from './components/LandingSection/LandingSection-comp';
import TourPage from "./components/TourPage/TourPage-comp";


function App() {
  return (
    <div className="App">
        <LandingSection/> 
        <TourPage/>
    </div>
  );
}

export default App;
