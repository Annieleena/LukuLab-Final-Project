import React from 'react'
import { useState } from 'react';
import Button from "./components/Button";
import Sound from "./components/Sound";
import Donennext from "./components/Donennext";
import { exerciseGuide } from "./components/Exerciseguide";

function App() {
  const correctOrder=["Top Left","Top Right","Bottom Left","Bottom Right"];
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

   const [neverclickedbtn1, setNC1] = useState(true);
   const [neverclickedbtn2, setNC2] = useState(true);
   const [neverclickedbtn3, setNC3] = useState(true);
   const [neverclickedbtn4, setNC4] = useState(true);
   
  return (
    <main>
      <h1>Exercise-1</h1>
      <Button className="btn-1" index={choices.indexOf("Top Left")} correctIndex={correctOrder.indexOf("Top Left")} onClick={() => {
                if (neverclickedbtn1)
                {
        setChoices([
          ...choices,
          "Top Left"
          /*<img className= "aft-clic1" src="no.1.jpg" alt='clicked' />*/
        ])}

        setNC1(false);
      }

      } src="1.jpg"></Button>
      <Button  className="btn-2" index={choices.indexOf("Top Right")} correctIndex={correctOrder.indexOf("Top Right")} onClick={() => {
                if (neverclickedbtn2)
                {
        setChoices([
          ...choices,
          "Top Right"
          // <img className= "aft-clic2"src="no.2.jpg" alt='clicked' />
        ])}

        setNC2(false);
      }
      } src="2.jpg"></Button>
      <Button className="btn-3" index={choices.indexOf("Bottom Left")} correctIndex={correctOrder.indexOf("Bottom Left")} onClick={() => {
                if (neverclickedbtn3)
                {
        setChoices([
          ...choices,
          "Bottom Left"
          //<img className= "aft-clic3"src="no.3.jpg" alt='clicked' />
        ])}
        setNC3(false);
      }
      } src="3.jpg"></Button>
      <Button className="btn-4" index={choices.indexOf("Bottom Right")} correctIndex={correctOrder.indexOf("Bottom Right")} onClick={() => {
        if (neverclickedbtn4)
        {
        setChoices([
          ...choices,
          "Bottom Right"
          //<img className= "aft-clic4"src="no.4.jpg" alt='clicked' />
        ])}
        setNC4(false);
      }
      } src="4.jpg"></Button>
      { /* <ul>
        {choices.map(choice => (
      <li>{choice}</li>
        ))}
       </ul> */}
      
      <div>
        <Sound />
      </div>
      <div>
        <Donennext handleNextClick={handleNextClick} handleDoneClick={handleDoneClick}
        hasNext={hasNext} hasDone={isDoneClicked}/>
      </div>
      <div>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} How to do Exercise?
        {showMore && <p>{ guide.Steps }</p>}
      </button>
      </div>
      {index}
    </main >
  );
}
export default App;

