import ironhackLogo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Navbar() {
    return (
        <nav id="navbar">
            <img id="nav-img" src={ironhackLogo} alt="logo" />
            <img id="menu" src={menu} alt="menu" />
        </nav>
    );
}

export default Navbar;