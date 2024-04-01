
const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <h1>Please Register</h1>
            <div className="my-4 p-2 mx-auto border w-1/2">
            <form className="space-y-4" onSubmit={handleRegister}>
                <input className="w-full py-2 px-4 border rounded-xl" type="email" name='email' placeholder="Enter Email" /> <br />
                <input className="w-full py-2 px-4 border rounded-xl" type="password" name="password" placeholder="Password" id="" /> <br />
                <input className="w-full btn btn-secondary" type="submit" value="Submit" />
            </form>
            </div>
        </div>
    );
};

export default Register;