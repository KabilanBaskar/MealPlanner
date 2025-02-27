import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
        <div className="makecenter">
        <center>
        <h1>Signup form</h1>
        <form action="post">
            <input type="text" placeholder="FirstName" required className="blockinput"/>
            <input type="text" placeholder="lastName" required className="blockinput"/>
            <input type="email" placeholder="Enter your email" required className="blockinput"/>
            <input type="email" placeholder="Confirm yor email" required className="blockinput" />
            <input type="password" placeholder="Enter yor password" required className="blockinput" />
            <input type="password" placeholder="confirm your password" required className="blockinput" />
            <button className="blockinput">Signup</button>
            <p>Already Have an account? <Link to="/Login"><i><b>Sign-in</b></i></Link></p>
        </form>
        </center>
        </div>
        </>
    )
}
export default Signup;