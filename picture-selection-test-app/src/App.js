import './App.css';
import { PicGroupFrame, PageFrame, AudioControlFrame, BottomFrame } from "./components/Frames";
import { ButtonDoneNext, AudioPlayer } from "./components/Controls"
import audioSrc1 from './components/testAudio/audio1.ogg'
import audioSrc2 from './components/testAudio/audio2.mp3'
import { useState } from "react";

//load picture and audio files in to arrays at the start of the app
const audioSrcSet = [audioSrc1, audioSrc2]

function App() {
  let [testFilesGroup, setTestFilesGroup] = useState([
    {
      audio: audioSrcSet[0]
    },
    {

    }
  ]
  )

  const onDoneNextClicked = () => {
    console.log("onDoneNextClicked");
    setTestFilesGroup(
      [{
        audio: audioSrcSet[1]
      },
      {

      }
    ]
    )

    // Audio object help 
    // https://www.w3schools.com/jsref/dom_obj_audio.asp    

    //audio should be paused and new set of files should be changed
    const audioPlayer = document.getElementsByClassName("audioPlayer")[0];

    // lets load the audio src freshly
    audioPlayer.load()

  };

  return (
    <PageFrame>
      <PicGroupFrame>
      </PicGroupFrame>
      <AudioControlFrame>
        <AudioPlayer
          playSrc={testFilesGroup[0].audio}
        />
      </AudioControlFrame>
      <BottomFrame>
        <ButtonDoneNext
          value={"Done"}
          onClick={onDoneNextClicked}
        />
      </BottomFrame>
    </PageFrame>
  )
}

export default App;
