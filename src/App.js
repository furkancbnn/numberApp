import { useState } from "react";
import "./App.css";

function App() {
   const [minNumb, setMinNumb] = useState(0);
   const [maxNumb, setMaxNumb] = useState(10);
   const [randomNumber, setRandomNumber] = useState(20);

   const giveRandomNumber = () => {
      setRandomNumber(
         Math.floor(Math.random() * (maxNumb - minNumb + 1) + minNumb)
      );
   };
   return (
      <div>
         <div className='container'>
            <div className='randomNum'>
               <h2>
                  Random Number: <span>{randomNumber}</span>
               </h2>
            </div>

            <div className='numbContainer'>
               <div>
                  <p>Min: </p>
                  <input
                     type='number'
                     value={minNumb}
                     onChange={(e) => setMinNumb(e.target.value)}
                  />
               </div>

               <div>
                  <p>Max: </p>
                  <input
                     type='number'
                     value={maxNumb}
                     onChange={(e) => setMaxNumb(e.target.value)}
                  />
               </div>

               <div className='getDiv'>
                  <button className='getRandom' onClick={giveRandomNumber}>
                     Get Random Number
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
