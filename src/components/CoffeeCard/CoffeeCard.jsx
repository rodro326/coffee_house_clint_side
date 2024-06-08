/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({element,remaining,setRemaining}) => {
    const {coffee,quantity,category, supplier,taste, details,photo,_id} = element;

    const handleDelete = id =>{
      console.log(id)
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
          fetch(`http://localhost:3000/coffee/${_id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const rem = remaining.filter(cof=> cof._id !== _id);
              setRemaining(rem)
            }
          })
        }
      });
    }
    return (
        <div className="card  card-side shadow-xl">
        <figure><img className="h-[230px] w-[200px]" src={photo} alt="Movie"/></figure>
        <div className="card-body flex flex-row" >
         <div className="flex-1 space-y-1">
         <h2 className="card-title">{coffee}</h2>
          <p>{details}</p>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
         </div>
          <div className="flex flex-col gap-1">
            <Link to={`/details/${_id}`}><button className="btn w-[100px] btn-info">View</button></Link>
            <Link to={`/updatecoffee/${_id}`}>
            <button className="btn btn-success w-[100px] ">Edit</button> 
            </Link>
            <button
            onClick={()=>handleDelete(_id)}
             className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;