import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("en-GB");
  let [currentTime, setTime] = useState(time);

  function getTime() {
    let newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
