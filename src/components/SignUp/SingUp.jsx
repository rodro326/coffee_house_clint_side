import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SingUp = () => {

    const {createUser} = useContext(AuthContext)
    const handleSingUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            const createdAt = result.user.metadata.creationTime;
            const user = {email , createdAt: createdAt};
            fetch('http://localhost:3000/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=> res.json())
            .then (data=>{
                console.log(data);
                if(data.insertedId){
                    console.log('user inserted successfully');
                }
            })
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center mb-6">Register Here</h2>
                <form onSubmit={handleSingUp} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" className="mt-1 p-2 w-full border rounded-md"  />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Phot_URL</span>
                        </label>
                        <input type="text" name="photo" className="mt-1 p-2 w-full border rounded-md"  />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" className="mt-1 p-2 w-full border rounded-md"  />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md"  />
                    </div>
                    <div>
                        <button className="w-full bg-gray-500 text-white p-2 rounded-md ">
                           Please Register
                        </button>
                    </div>
                </form>
                <div>
                    <h2 className="bg-red-100 text-center mt-3 ">Google</h2>
                </div>
                <div className="text-center mt-3">
                    <p className="text-gray-600">Already Have An account? <Link className="text-[#35b3b3] font-semibold" to='/login'>Login here</Link></p>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default SingUp;