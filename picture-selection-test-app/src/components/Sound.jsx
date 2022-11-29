import React from "react";
import { useState } from "react";


export default function MyAudio() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn.sound" onClick={handleClick}>
        <audio controls>
          <source src="/audio.mp3" type="audio/mp3" />
        </audio>
      </button>
    </div>
  );
}