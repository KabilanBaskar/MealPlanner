import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                <ul className="Navbar">
                    <li><Link to="/Home"><button>Home</button></Link></li>
                    <li><Link to="/MyTable"><button>My Table</button></Link></li>
                    <li><Link to="/Tracker"><button>Tracker</button></Link></li>
                    <li><Link to="/Rewards"><button>Rewards</button></Link></li>
                    <li><Link to="/FoodSection"><button>Food Section</button></Link></li>
                    <li><a href="/" ><button>Log-out</button></a></li>
                </ul>
                </nav>
               
            </header>
        </>
    )
}
export default Navbar