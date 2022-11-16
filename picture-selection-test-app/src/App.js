/*import logo from './logo.svg';*/
import './App.css';


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
      <div classname="button-container">
        <button className="btn-play"><img src="./play-button.png" alt="Play icon" style={{width:"3rem"}} />
          <i className="btnplaylist"></i>
        </button> 
        
        </div>
      
    </div>
    
  );
}

export default App;
