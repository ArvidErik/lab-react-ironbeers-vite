import {Link} from "react-router-dom"
import homeIcon from "../assets/home-icon.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="nav">
            <Link to={"/"}>
                <img src={homeIcon} alt="" />
            </Link>
        </nav>
    )
}

export default Navbar;
