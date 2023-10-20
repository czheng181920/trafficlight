import './App.css';
import React, { useState, useEffect } from 'react';
import Invalid from './Invalid';
import Lights from './Lights';

function App() {
  const[green, setGreen] = useState(3);
  const[yellow, setYellow] = useState(2);
  const[red, setRed] = useState(5);
  const[seconds, setSeconds] = useState(0);
  const[error, setError] = useState(false)
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((sec) => sec+1),
      1000,
    );
    return () => clearInterval(interval); //cleanup function
  }, []);
  useEffect(() => {
    if (parseFloat(yellow) !== parseFloat(red-green) || yellow <=0 || red <= 0 || green <= 0){
      setError(true)
    } else {
      setError(false)
    }
  }, [red, yellow, green])
  return (
    <div className="App">
      <div className="inputGroup">
        <label>
          Green time sg (x): <input name="greenInput" type="text" value={green} onChange={(e) => setGreen(e.target.value)}/>
        </label>
        <label>
          Yellow time (y): <input name="yellowInput" type="text" value={yellow} onChange={(e) => setYellow(e.target.value)}/>
        </label>
        <label>
          Red time (z):  <input name="redInput" type="text" value={red} onChange={(e) => setRed(e.target.value)}/>
        </label>
      </div>
      <div className="inputGroup">
        Seconds: {seconds}
      </div>
      {error 
        ? <Invalid />
        : <Lights red={red} green={green} seconds={seconds} />
      }
      
    </div>
  );
}

export default App;
