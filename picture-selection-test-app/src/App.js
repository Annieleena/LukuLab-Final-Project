import './App.css';
import { PicGroupFrame, PageFrame, AudioControlFrame, BottomFrame } from "./components/Frames";
import { PicRegionLD, PicRegionLT, PicRegionRD, PicRegionRT, AudioControlRegion } from "./components/Region";
import { ButtonDoneNext, AudioPlayer } from "./components/Controls"
import audioSrc1 from './components/testAudio/audio1.ogg'
import audioSrc2 from './components/testAudio/audio2.mp3'
import { useState } from "react";
import image1 from './components/testpics/pic101.png'
import image2 from './components/testpics/pic104.png'
import image3 from './components/testpics/pic107.png'
import image4 from './components/testpics/pic110.png'

//load picture and audio files in to arrays at the start of the app
const images = [image1, image2, image3, image4, image3, image1, image4, image2];
const audioSrcSet = [audioSrc1, audioSrc2]

let i = 0;

function App() {
  let [testFilesGroup, setTestFilesGroup] = useState(
    [
      {
        pic: images[0]
      },
      {
        pic: images[1]
      },
      {
        pic: images[2]
      },
      {
        pic: images[3]
      },
      {
        audio: audioSrcSet[0]
      }]
  )

  const onDoneNextClicked = (buttonText) => {
    console.log("onDoneNextClicked" + i.toString());
    i = 4;
    let j = 0;
    if (buttonText === "Done") {
      //calculate current page results and update current score
      variable = "Next"
    }
    else if (buttonText === "Next") {

      setTestFilesGroup(
        [{
          pic: images[i + 0]
        },
        {
          pic: images[i + 1]
        },
        {
          pic: images[i + 2]
        },
        {
          pic: images[i + 3]
        },

        {
          audio: audioSrcSet[j + 1]
        }]
      )

      // Audio object help 
      // https://www.w3schools.com/jsref/dom_obj_audio.asp    

      //audio should be paused and new set of files should be changed
      const audioPlayer = document.getElementsByClassName("audioPlayer")[0];

      // lets load the audio src freshly
      audioPlayer.load()
      variable = "Done"
    }
  };

  return (
    <PageFrame>
      <PicGroupFrame>
        <PicRegionLT>
          <img src={testFilesGroup[0].pic} alt="" />
        </PicRegionLT>
        <PicRegionRT>
          <img src={testFilesGroup[1].pic} alt="" />
        </PicRegionRT>
        <PicRegionLD>
          <img src={testFilesGroup[2].pic} alt="" />
        </PicRegionLD>
        <PicRegionRD>
          <img src={testFilesGroup[3].pic} alt="" />
        </PicRegionRD>
      </PicGroupFrame>
      <AudioControlFrame>
        <AudioControlRegion>
          <AudioPlayer
            playSrc={testFilesGroup[4].audio}
          />
        </AudioControlRegion>
      </AudioControlFrame>
      <BottomFrame>
        <ButtonDoneNext
          value={variable}
          onClick={onDoneNextClicked}
        />
      </BottomFrame>
    </PageFrame>
  )
}
// const Student_Progress = function (props) {
//   const [studentProgressData, studentProgressData] = useState();

//   const fetchData = async function () {
//     const response = await fetch("https://legible-seal-72.hasura.app/v1/graphql");
//     const data = await response.json();
//     studentProgressData(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const

// }
export default App;
