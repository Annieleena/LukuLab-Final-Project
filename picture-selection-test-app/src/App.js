import React from 'react'
import { useState } from 'react';
import Button from "./components/Button";
import Sound from "./components/Sound";
import Donennext from "./components/Donennext";

function App() {
  const [choices, setChoices] = useState([]);
  const [isDoneClicked, setIsDoneClicked] = useState(false);
  const [index, setIndex] = useState(0);

     
      let hasNext = index < choices.length + 1;

      function handleDoneClick() {
        setIsDoneClicked(true);
        
      }
      function handleNextClick() {
        if (hasNext) {
          setIndex(index + 1);
        }
      }


  return (
    <main>
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
        <Donennext handleNextClick={handleNextClick} handleDoneClick={handleDoneClick}
        hasNext={hasNext} hasDone={isDoneClicked}/>
      </div>
      {index}
    </main >


  );
}
export default App;
