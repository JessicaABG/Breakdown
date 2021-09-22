import {Link} from "react-router-dom";


export default function Navbar() {
    return (
    <nav>

    <Link to="/"><h1>Breakdown</h1></Link>

    <ul>

    <li><Link to="/Review">Add Review</Link></li>

    <li><Link to="/cHub">Comment Hub</Link></li>
    
    </ul>

    </nav>);
    }


