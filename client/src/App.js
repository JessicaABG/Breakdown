import {Route, Link, Switch} from "react-router-dom";
import './App.css';
import Navbar     from "./components/Navbar"
import SongList   from './components/SongList';
import ArtistPane from './components/ArtistPane';
import ReviewForm from './components/ReviewForm';
import ReviewPage from './components/ReviewPage';
import Footer from "./components/Footer";

{/*Import, Link, Switch*/}

function App() {
  return (
    <div className='App'>
    <div> <Navbar /></div>
    {/* <div><ArtistPane/></div> */}{/*ArtistPane IN PRGRESS*/}
    <Switch>
      <Route  path ="/home" exact><h3>Newly Rated Songs</h3><SongList/></Route>
      <Route  path ="/songs/:id" exact><div><ReviewForm/></div></Route>
      <Route  path ="/reviews" exact><div><ReviewPage/></div></Route>
    </Switch>
    <div><Footer /></div>
    </div>
  );
}

export default App;
