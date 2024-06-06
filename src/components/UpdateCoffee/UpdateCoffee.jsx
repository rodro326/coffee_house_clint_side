import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffees = useLoaderData()
    const {coffee,quantity, supplier,taste,category, details,photo,_id} = coffees;

    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const coffee = form.coffee.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {coffee,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)

        fetch(`http://localhost:3000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Good job!",
                    text: "Coffee Updated Successful",
                    icon: "success"
                  });
            }
        })
    }

    return (
        <div className="  bg-[#35b3b3] p-8 rounded-lg ">
            <h2 className="text-2xl uppercase text-white font-bold "> Update Coffee</h2>
            <form onSubmit={handleAdd} >
      {/* form name and brand name row */}
      <div className="md:flex gap-3  ">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="coffee" placeholder="Coffee Name" defaultValue={coffee}   className="input input-bordered w-full bg-black text-white" />
          </label>
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <label className="input-group">
            <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity}   className="input bg-black text-white input-bordered w-full" />
          </label>
        </div>
      </div>
      {/* form supplier row */}
      <div className="md:flex gap-3 ">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Supplier Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={supplier}   className="input bg-black text-white input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
            <input type="text" name="taste" placeholder="Taste" defaultValue={taste}  className="input bg-black text-white input-bordered w-full" />
          </label>
        </div>
      </div>
      {/* form category and details row */}
      <div className="md:flex gap-3 ">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            <input type="text" name="category" placeholder="Category" defaultValue={category}  className="input bg-black text-white input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            <input type="text" name="details" placeholder="details" defaultValue={details}  className="input bg-black text-white input-bordered w-full" />
          </label>
        </div>
      </div>
       {/* form photo url row */}
       <div >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo}  className="input bg-black text-white input-bordered w-full" />
          </label>
        </div>
      </div>
      <input type="submit" value="UPDATE COFFEE" className="btn btn-block bg-white text-black font-bold mt-8" />
    </form>
        </div>
    );
};

export default UpdateCoffee;