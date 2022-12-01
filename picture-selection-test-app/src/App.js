import React from 'react'
import { useState } from 'react';
import Button from "./components/Button";
import Sound from "./components/Sound";
/*import Donennext from "./components/Donennext";
import React, { Component } from "react";*/

function App() {
  const [choices, setChoices] = useState([]);

  /*type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
const withClicked = (Component) => {
  return (props) => <Component {...props} />;
};

const ButtonWithClicked = withClicked(Button);

<div className="btn.clicked">
      
      
      <ButtonWithClicked onClick={() => console.log("log click")}>
        Clicked
      </ButtonWithClicked>
    </div>
  );
*/


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
        <Donennext handleNextClick={handleNextClick} handleDoneClick={handleDoneClick}
        hasNext={hasNext} hasDone={isDoneClicked}/>
      </div>
      {index}
    </main >


  );
}
export default App;
