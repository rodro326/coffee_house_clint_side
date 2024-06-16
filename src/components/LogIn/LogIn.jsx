import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {

    const {signIn} = useContext(AuthContext)


    const handleSingIn = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-4xl text-black font-bold text-center mb-6">Login Here</h2>
            <form onSubmit={handleSingIn} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md"  />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md"  />
                    <p className="text-xs text-gray-500 mt-1">
                        <a href="#" className="text-blue-500 hover:underline">
                            Forgot your password?
                        </a>
                    </p>
                </div>
                <div>
                    <button className="w-full bg-gray-500 text-white p-2 rounded-md ">
                        Login
                    </button>
                </div>
            </form>
            <div className="text-center mt-4">
                <p className="text-gray-600">Do not Have an Account? <Link className="text-[#35b3b3] font-semibold" to='/sign'>Register here</Link></p>
                <div className="flex justify-center mt-2">
                </div>
            </div>
        </div>
    </div>
    );
};

export default LogIn;