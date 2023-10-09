import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const[x, setX] = useState(3);
  const[z, setZ] = useState(5);
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
    let yellow = z-x;
    if (yellow <=0 || z <= 0 || x <= 0){
      setError(true)
    } else {
      setError(false)
    }
  }, [z, x])
  return (
    <div className="App">
      <div className="inputGroup">
        <label>
          Green time: <input name="xInput" type="text" value={x} onChange={(e) => setX(e.target.value)}/>
        </label>
        <label>
          Red time:  <input name="zInput" type="text" value={z} onChange={(e) => setZ(e.target.value)}/>
        </label>
      </div>
      <div className="inputGroup">
        Seconds: {seconds}
      </div>
      {error 
        ? <div>invalid times</div>
        :<div class="gridContainer">
        <div class="gridItem"></div>
        {(seconds%(z*2)) >= z 
          ? <div class="gridItem red"></div>
          : (seconds%(z*2)) < x 
            ? <div class="gridItem green"></div>
            : <div class="gridItem yellow"></div>
        }
        <div class="gridItem"></div>
        {(seconds%(z*2)) < z 
          ? <div class="gridItem red"></div>
          : (seconds%(z*2)) < z+x 
            ? <div class="gridItem green"></div>
            : <div class="gridItem yellow"></div>
        }
        <div class="gridItem"></div>
        {(seconds%(z*2)) < z 
          ? <div class="gridItem red"></div>
          : (seconds%(z*2)) < z+x 
            ? <div class="gridItem green"></div>
            : <div class="gridItem yellow"></div>
        }
        <div class="gridItem"></div>
        {(seconds%(z*2)) >= z 
          ? <div class="gridItem red"></div>
          : (seconds%(z*2)) < x 
            ? <div class="gridItem green"></div>
            : <div class="gridItem yellow"></div>
        }
        <div class="gridItem"></div>
      </div>
      }
      
    </div>
  );
}

export default App;
