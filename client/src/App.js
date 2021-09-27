import './App.css';
import Navbar from "./components/Navbar"
import {Route} from "react-router-dom";
import SongList from './components/SongList';

{/*Import, Link, Switch*/}

function App() {
  return (
    <div className="App">
      {/*NavBar*/}
      <Navbar />
      {/*Routes*/}

      <Route  path ="/Review"><div>Add Review</div></Route>
      <Route  path ="/cHub"><div>Comment Hub</div></Route>

      <Route path ="/"><SongList/></Route> 
    </div>
    
  );
}

export default App;
