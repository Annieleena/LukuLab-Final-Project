import React from "react";
import { useState } from "react";


export default function MyAudio(props) {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn.sound" onClick={handleClick}>
        <audio controls>
          <source src={props.src} type="audio/mp3" />
        </audio>
      </button>
    </div>
  );
}