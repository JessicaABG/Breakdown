import {Link} from "react-router-dom";


export default function Navbar() {
    return (
    <nav>

    <Link to="/home"><h1>Breakdown</h1></Link>  
    <Link to="/reviews">Comment Hub</Link>
    

    </nav>);
    }


