const Login = () => {
    return (
        <>
        <div>
        <center>
            <h1>Sign-in form </h1>
            <table>
            <form>
            <tr>
                <td><input type="email" placeholder="Enter Your E-mail" required /></td>
            </tr>
            <tr>
                <td><input type="password" placeholder="Enter Your password" required /></td>
            </tr>
            <tr>
                <td><button>Sign-in</button></td>
            </tr>
            <tr>
                <td><p>Don't Have an account? <a href="./Sign-up/Sign-up.html"><i><b>Sign-up</b></i></a></p></td>
            </tr>
            </form>
            </table>
        </center>
        </div>
        </>
    )
}
export default Login