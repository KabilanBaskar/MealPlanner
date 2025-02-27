import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    // const [name, setName] = useState("");
    // const changename = () => {

    // }
    return (
        <>
        <div className="makecenter">
            <center>
            <h1>Sign-in form </h1>
            <form>
                <input type="email" placeholder="Enter Your E-mail" required className="blockinput" />
                <input type="password" placeholder="Enter Your password" className="blockinput" required />
                <button className="blockinput">Sign-in</button>
                <p>Don't Have an account? <Link to="/Signup"><i><b>Sign-up</b></i></Link></p>
            </form>
            </center>
        </div>
        </>
    )
}
export default Login