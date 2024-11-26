import "./navbar.css";
import { Link } from 'react-router-dom';
function MyNavbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/Logo.png" alt="BlueRidgeLogo" />
                </div>
                <ul>
                    <li>  <Link to="/"> Home </Link> </li>
                    <li> <Link to="/page2"> Donation </Link> </li>
                    <li> <Link to="/page3">  Volunteers </Link> </li>
                </ul>

                <input placeholder="Looking for something?"></input>
            </div>
        </>
    );
}

export default MyNavbar;

function handleScroll(e, targetId) {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}
