import { Link } from "react-router-dom";

const Login = () => {
    const handelFrom=(e)=>{
        e.preventDefault()
        const from=e.target
        const email=from.email.value
        const password=from.password.value
        console.log(name,email,password)
    }
    return (
        <div className="w-1/4 mx-auto">
            <form onSubmit={handelFrom} >
                <div className="space-y-4">
                    <div>
                        <h2 className="text-3xl text-center font-semibold">Login Now!</h2>
                    </div>
                   
                    <div>
                        <input type="email" name="email" placeholder="Enter Your Email" className="border-b-[1px] border-gray-500 p-3 w-full outline-0" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Enter Your Passwor" className="border-b-[1px] border-gray-500 p-3 w-full outline-0" />
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Login Now" className="bg-black text-gray-200 px-4 py-2 " />
                    </div>
                </div>
            </form>
            <p>are you new? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;