import './App.css';
import Playaudio from './components/Playaudio';


function App () {
  
  return (
    <div classname="app-container">
      <div classname="image-display-container">
        <img 
        src="./car.jpg"
        alt="Car" />
        <img 
        src="./teddy.jpg"
        alt="Teddy"  />
        <img
        src="./horns.jpg"
        alt="Horns"  />
        <img 
        src="./spinner.jpg"
        alt="Spinner" />
        
        

      </div>
      <div>
        <Playaudio />
        
        </div>
      
    </div>
    
  );
}

export default App;
