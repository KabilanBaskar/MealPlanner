import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/Login.css'
const Login = () => {
    // const [name, setName] = useState("");
    // const changename = () => {

    // }
    return (
        <>
        <div className="leftbackground"></div>
        <div className="container">
            <h1>Sign-in form </h1>
            <form>
                <input type="email" placeholder="Enter Your E-mail" required className="blockinput" />
                <input type="password" placeholder="Enter Your password" className="blockinput" required />
                <button className="buttoninput">Sign-in</button>
                <p>Don't Have an account? <Link to="/Signup"><i><b>Sign-up</b></i></Link></p>
            </form>
        </div>
        <div className="rightbackground"></div>
        </>
    )
}
export default Login