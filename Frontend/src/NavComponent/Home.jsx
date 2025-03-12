import Navbar from "./Navbar";
import Login from "../UserCredentials/Login";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
    return(
        <>
        <div className="background">
            <img src="../../public/pngegg (2).png" alt="image" className="juiceimg"/>
            <center className="topicdiv">
                <motion.h1 className="topic" initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Track</motion.h1>
                <motion.h1 className="topic" initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:1}}>Eat</motion.h1>
                <motion.h1 className="topic" initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:1.5}}>Repeat</motion.h1>
                <Link to="/Login"><button className="button">Sign-in</button></Link>
            </center>
        </div>
        </>
    )
}
export default Home;