import './App.css';
import Navbar from "./components/Navbar"
import {Route} from "react-router-dom";
import SongList from './components/SongList';


function App() {
  return (
    <div className="App">
      {/*NavBar*/}
      <Navbar />
      {/*Routes*/}
      <Route path ="/"><SongList/></Route>
      {/* <Route path ="/MusicList"></Route> */}
      <Route  path ="/Review"><div>Add Review</div></Route>
      <Route  path ="/cHub"><div>Comment Hub</div></Route>
      
    </div>
    
  );
}

export default App;
