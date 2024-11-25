import "./navbar.css";
function MyNavbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/Logo.png" alt="BlueRidgeLogo" />
                </div>
                <ul>
                    <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
                    <li><a href="#donation" onClick={(e) => handleScroll(e, "donation")}>Donation</a></li>
                    <li><a href="#volunteers" onClick={(e) => handleScroll(e, "volunteer")}>Volunteers</a></li>
                    <li><a href="#goods" onClick={(e) => handleScroll(e, "goods")}>Goods</a></li>
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
