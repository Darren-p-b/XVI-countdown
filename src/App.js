import React from 'react';
import './App.css';
import CountdownClock from './countdown';
import FileUpload from './upload';

const express = require("express");
const app = express();
const uploadRouter = require("./routes/upload");

// Other configurations and middleware

app.use("/upload", uploadRouter);
app.use("/uploads", express.static("uploads"));

// Start the server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});


function App() {
  return (
    <div>
      <h1 className='countdown-header'>Final Fantasy XVI Countdown</h1>
      <CountdownClock />
      <FileUpload />
    </div>
  );
}

export default App;

