import './App.css';
import Playaudio from './components/Playaudio';


function App () {
  
  return (
    <div className="app-container">
      <div className="image-display-container">
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
        <div>
          
        </div>
      
    </div>
    
  );
}

export default App;
