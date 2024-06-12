
import './nav.css'; // Import your CSS file here

const Nav = () => {
    return(<>
      <nav className="navbar">
       <div>
        <h1>THOR</h1>
      </div>
      <div className="nav-links">
        <span><a href="#home">Home</a></span>
        <span><a href="#about">About</a></span>
        <span><a href="#contact">Contact</a></span>
      </div>
    </nav>
    </>);
    }
    export default Nav;
