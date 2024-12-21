import React, { useState } from "react";
import { evaluate } from "mathjs";
import './Calcul.css'



export default function Calcul() {
  const [value, setValue] = useState(""); 
  function handle(e) {
    const input = e.target.innerHTML;

    if (input === "AC") {
      setValue("");
    } else if (input === "DELL") {
      setValue(value.slice(0, -1));
    } else if (input === "=") {
      try {
        setValue(evaluate(value).toString()); 
      } catch {
        setValue("Error"); 
      }
    } else {
      setValue(value + input);
    }
  }

  return (
    <div>

                <div className="body">
      
      <div className="calcultor">
        
        <input type="text" placeholder="0" value={value} readOnly />

       
        <div>
          <button className="button operator btn2" onClick={handle}>
            AC
          </button>
          <button className="button operator btn2" onClick={handle}>
            DELL
          </button>
          <button className="button operator btn2" onClick={handle}>
            %
          </button>
          <button className="button operator btn2" onClick={handle}>
            /
          </button>
        </div>

       
        <div>
          <button onClick={handle} className="btn2">7</button>
          <button onClick={handle} className="btn2">8</button>
          <button onClick={handle} className="btn2">9</button>
          <button className="button operator btn2" onClick={handle}>
            *
          </button>
        </div>

        <div>
          <button onClick={handle} className="btn2">4</button>
          <button onClick={handle} className="btn2">5</button>
          <button onClick={handle} className="btn2">6</button>
          <button className="button operator btn2" onClick={handle}>
            -
          </button>
        </div>

        <div>
          <button onClick={handle} className="btn2">1</button>
          <button onClick={handle} className="btn2">2</button>
          <button onClick={handle} className="btn2">3</button>
          <button className="button operator btn2" onClick={handle}>
            +
          </button>
        </div>

        <div>
          <button onClick={handle} className="btn2">00</button>
          <button onClick={handle} className="btn2">0</button>
          <button onClick={handle} className="btn2">.</button>
          <button className="button equalBtn btn2" onClick={handle}>
            =
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}
