import React from 'react'
import { useState } from 'react';
import Button from "./components/Button";
import Sound from "./components/Sound";

function App() {
  const [choices, setChoices] = useState([]);


  return (
    <main>
      <div> </div>
      <Button className="btn-1" onClick={() => {
        setChoices([
          ...choices,
          <img src="no.1.jpg" alt='clicked' />
        ]);
      }} src="1.jpg"></Button>
      <Button  className="btn-2" onClick={() => {
        setChoices([
          ...choices,
          <img src="no.2.jpg" alt='clicked' />
        ]);
      }} src="2.jpg"></Button>
      <Button className="btn-3" onClick={() => {
        setChoices([
          ...choices,
          <img src="no.3.jpg" alt='clicked' />
        ]);
      }} src="3.jpg"></Button>
      <Button className="btn-4" onClick={() => {
        setChoices([
          ...choices,
          <img src="no.4.jpg" alt='clicked' />
        ]);
      }} src="4.jpg"></Button>
      <ul>
        {choices.map(choice => (
          <li>{choice}</li>
        ))}
      </ul>
      <div>
        <Sound />
      </div>
      <div>
        <button className="btn.done">Done</button>
        <button className="btn.next">Next</button>
      </div>
      
    </main >


  )
}
export default App;
