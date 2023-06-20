import React from 'react';
import './App.css';
import CountdownClock from './components/countdown';
import background from './ffxvi-background.jpg';
import "./fonts/OPTIEngeEtienne.ttf"
import audioFile from "./XVI Background.mp3"
import FileUpload from './components/upload';

// add a audio file to play in the background
// set audio to 50% volume

function App() {
  return (
    <>
     <div style={{ 
      backgroundImage: `url(${background})`, 
      position: 'absolute', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh' }}>
      <h1 className='countdown-header'>The triumph over crystals begins...</h1>
      <audio controls id="player">
        <source src={audioFile} type="audio/mp3" />
      </audio>
      <CountdownClock />
      <FileUpload />
      </div>
    </>
  );
}

export default App;

