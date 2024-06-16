import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers ] = useState(loadedUsers)

    const handleDelete = id =>{
        fetch(`http://localhost:3000/user/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                console.log('deleted success');

                const remaining = users.filter(user=> user._id !== id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="text-xl font-semibold text-black">Email</th>
        <th className="text-xl font-semibold text-black">Date</th>
        <th className="text-xl font-semibold text-black">Action</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map(user =><tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                    <button onClick={()=>handleDelete(user._id)} className="btn bg-red-500" >X</button>
                </td>
              </tr>    )
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;