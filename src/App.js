import React from 'react';
import './App.css';


//Components

import LandingSection from './components/LandingSection/LandingSection-comp';
import TourPage from "./components/TourPage/TourPage-comp";
import MusicSection from "./components/MusicSection/MusicSection-comp"
import ContactSection from './components/ContactSection/ContactSection-comp';

function App() {
  return (
    <div className="App">
        <LandingSection/> 
        <TourPage/>
        <MusicSection />
        <ContactSection />
    </div>
  );
}

export default App;
