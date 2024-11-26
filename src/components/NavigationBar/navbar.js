import "./navbar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
                    <li> <Link to="/page3">  Documentation </Link> </li>
                </ul>
                <div className="search-container">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input className="search-input" placeholder="Looking for something?" />
                </div>
            </div>
        </>
    );
}

export default MyNavbar;



// script.js

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
        document.querySelectorAll('.navbar a').forEach(function (link) {
            link.style.color = 'black';
        });
    } else {
        navbar.style.backgroundColor = '#162f65';
        navbar.style.color = 'white';
        document.querySelectorAll('.navbar a').forEach(function (link) {
            link.style.color = 'white';
        });
    }
});


function handleScroll(e, targetId) {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}
