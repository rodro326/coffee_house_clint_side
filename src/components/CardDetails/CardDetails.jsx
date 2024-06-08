import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const coffees = useLoaderData()
    const {coffee,photo} = coffees;
    return (
        <div className="card w-full h-[500px] glass">
  <figure><img src={photo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{coffee}</h2>
  </div>
</div>
    );
};

export default CardDetails;