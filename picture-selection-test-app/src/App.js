import React from 'react';
import { useState, useEffect } from 'react';
import Button from "./components/Button";
import Sound from "./components/Sound";
import Donennext from "./components/Donennext";
import { exerciseGuide } from "./components/Exerciseguide";
import { fetchLukulab_exercise } from "./fetch_data";

function App() {
  const correctOrder = ["Top Left", "Top Right", "Bottom Left", "Bottom Right"];
  const [choices, setChoices] = useState([]);
  const [isDoneClicked, setIsDoneClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [pullDatas, setPullDatas] = useState();

  const fetchData = async function () {
    const data = await fetchLukulab_exercise();
    setPullDatas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  let hasNext = index < choices.length + 1;

  function handleDoneClick() {
    setIsDoneClicked(true);

  }
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
      setChoices([])
      setNC1(true)
      setNC2(true)
      setNC3(true)
      setNC4(true)
    }
  }

  const exerciseSet =
    pullDatas &&
    pullDatas.data.Lukulab_Exercise.filter((exercise) => {
      if (exercise.Exercise_Set === "1") {
        return true;
      } else {
        return false;
      }
    });

  console.log(exerciseSet);
  const exercise = pullDatas && exerciseSet[index];
  


  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let guide = exerciseGuide[index];

  const [neverclickedbtn1, setNC1] = useState(true);
  const [neverclickedbtn2, setNC2] = useState(true);
  const [neverclickedbtn3, setNC3] = useState(true);
  const [neverclickedbtn4, setNC4] = useState(true);

  const pictures = pullDatas && exercise.Picture.split(",");

  return (
    <main>
      <h1>Exercise-1</h1>

      <Button className="btn-1"
        /*key={exercise.ID}*/
        index={choices.indexOf("Top Left")}
        correctIndex={correctOrder.indexOf("Top Left")}
        onClick={() => {
          if (neverclickedbtn1) {
            setChoices([
              ...choices,
              "Top Left"
              /*<img className= "aft-clic1" src="no.1.jpg" alt='clicked' />*/
            ])
          }

          setNC1(false);
        }

        } src={pullDatas && pictures[0]}></Button>
      <Button className="btn-2"
        index={choices.indexOf("Top Right")}
        correctIndex={correctOrder.indexOf("Top Right")}
        onClick={() => {
          if (neverclickedbtn2) {
            setChoices([
              ...choices,
              "Top Right"
              // <img className= "aft-clic2"src="no.2.jpg" alt='clicked' />
            ])
          }

          setNC2(false);
        }
        } src={pullDatas && pictures[1]}></Button>
      <Button className="btn-3" index={choices.indexOf("Bottom Left")} correctIndex={correctOrder.indexOf("Bottom Left")} onClick={() => {
        if (neverclickedbtn3) {
          setChoices([
            ...choices,
            "Bottom Left"
            //<img className= "aft-clic3"src="no.3.jpg" alt='clicked' />
          ])
        }
        setNC3(false);
      }
      } src={pullDatas && pictures[2]}></Button>
      <Button className="btn-4" index={choices.indexOf("Bottom Right")} correctIndex={correctOrder.indexOf("Bottom Right")} onClick={() => {
        if (neverclickedbtn4) {
          setChoices([
            ...choices,
            "Bottom Right"
            //<img className= "aft-clic4"src="no.4.jpg" alt='clicked' />
          ])
        }
        setNC4(false);
      }
      } src={pullDatas && pictures[3]}></Button>
      { /* <ul>
        {choices.map(choice => (
      <li>{choice}</li>
        ))}
       </ul> */}

      <div>
        
       { pullDatas && <Sound src={exercise.Audio}
       key={exercise.Audio}/>}
      </div>
      <div>
        <Donennext handleNextClick={handleNextClick} handleDoneClick={handleDoneClick}
          hasNext={hasNext} hasDone={isDoneClicked} />
      </div>
      <div>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} How to do Exercise?
          {showMore && <p>{guide.Steps}</p>}
        </button>
      </div>
      {index + 1}
    </main >
  );
}
export default App;

