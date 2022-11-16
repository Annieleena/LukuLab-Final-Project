import { useState } from "react";
import ".components/audioforproject.mp3";

export default function Button() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src={"./audioforproject.mp3"} type="audio/mp3" />
        </audio>
      </button>
    </div>
);
}
