import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className="Navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/MyTable">My Table</Link></li>
                        <li><Link to="/Tracker">Tracker</Link></li>
                        <li><Link to="/Rewards">Rewards</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Navbar