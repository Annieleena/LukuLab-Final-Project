import React from 'react'
import { useState } from 'react';
import Button from "./components/Button";
import Sound from "./components/Sound";
import Donennext from "./components/Donennext";
import { exerciseGuide } from "./components/Exerciseguide";

function App() {
  const [choices, setChoices] = useState([]);
  const [isDoneClicked, setIsDoneClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

     
      let hasNext = index < choices.length + 1;

      function handleDoneClick() {
        setIsDoneClicked(true);
        
      }
      function handleNextClick() {
        if (hasNext) {
          setIndex(index + 1);
        }
      }

      function handleMoreClick()  {
        setShowMore(!showMore);
      }
      let guide = exerciseGuide[index];


  return (
    <main>
      <Button className="btn-1" onClick={() => {
        setChoices([
          ...choices,
          <img className= "aft-clic1" src="no.1.jpg" alt='clicked' />
        ]);
      }} src="1.jpg"></Button>
      <Button  className="btn-2" onClick={() => {
        setChoices([
          ...choices,
          <img className= "aft-clic2"src="no.2.jpg" alt='clicked' />
        ]);
      }} src="2.jpg"></Button>
      <Button className="btn-3" onClick={() => {
        setChoices([
          ...choices,
          <img className= "aft-clic3"src="no.3.jpg" alt='clicked' />
        ]);
      }} src="3.jpg"></Button>
      <Button className="btn-4" onClick={() => {
        setChoices([
          ...choices,
          <img className= "aft-clic4"src="no.4.jpg" alt='clicked' />
        ]);
      }} src="4.jpg"></Button>
      <ul>
        {choices.map(choice => (
          <li>{choice}</li>
        ))}
      </ul>
      <div>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} How to do Exercise?
        {showMore && <p>{ guide.Steps }</p>}
      </button>
      </div>
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
