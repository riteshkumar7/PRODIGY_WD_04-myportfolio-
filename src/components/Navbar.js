import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar=()=>{
    return(
      <div className='navbar'>
        <div className='nav'>
        <ul>
        <li><a href="" ><Link to="/">Home</Link></a></li>
        <li><a href="" ><Link to="/aboutme">AboutMe</Link></a></li>
        <li><a href="" ><Link to="/education">Education</Link></a></li>
        <li><a href="" ><Link to="/contactme">ContactMe</Link></a></li>
        <li><a href="" ><Link to="/skill">Skill</Link></a></li>
        <li><a href="" ><Link to="/project">Project</Link></a></li>
        </ul>
      </div>
      </div>
    );
}
export default Navbar;