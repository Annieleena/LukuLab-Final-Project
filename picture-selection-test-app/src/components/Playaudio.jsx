import { useState } from "react";
import "../audio-for-project-r.aac";

export default function Button() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src={"../audio-for-project-r.aac"} type="audio/aac" />
        </audio>
      </button>
    </div>
);
}


