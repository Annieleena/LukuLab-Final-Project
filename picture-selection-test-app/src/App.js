import React from 'react'
import { useState } from 'react';
import Button from "./components/Button";
import Sound from "./components/Sound";

function App() {
  const [choices, setChoices] = useState([]);


  return (
    <main>
      <Button className="btn-1" onClick={() => {
        setChoices([
          ...choices,
          "Top Left"
        ]);
      }} src="1.jpg"></Button>
      <Button  className="btn-2" onClick={() => {
        setChoices([
          ...choices,
          "Top Right"
        ]);
      }} src="2.jpg"></Button>
      <Button className="btn-3" onClick={() => {
        setChoices([
          ...choices,
          "Bottom Left"
        ]);
      }} src="3.jpg"></Button>
      <Button className="btn-4" onClick={() => {
        setChoices([
          ...choices,
          "Bottom Right"
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

      
    </main >


  )
}
export default App;
