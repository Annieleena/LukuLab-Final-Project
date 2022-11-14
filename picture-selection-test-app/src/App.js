/*import logo from './logo.svg';*/
import './App.css';

function App () {
  const playSound = () => {

  }
  return (
    <div classname="app-container">
      <div classname="image-display-container">
        <img 
        src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg"
        alt="Boy playing piano" />
        

      </div>
      <div classname="button-container">
        <button click={playSound}>Play</button>



      </div>
    </div>
    
  );
}

export default App;
