/* eslint-disable react/prop-types */


const CoffeeCard = ({element}) => {
    const {coffee,quantity, supplier,taste, details,photo} = element;
    return (
        <div className="card card-side bg-gray-400 shadow-xl">
        <figure><img className="h-[230px] w-[200px]" src={photo} alt="Movie"/></figure>
        <div className="card-body flex flex-row" >
         <div className="flex-1 space-y-1">
         <h2 className="card-title">{coffee}</h2>
          <p>{details}</p>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
         </div>
          <div className="flex flex-col gap-1">
            <button className="btn btn-outline">Button</button>
            <button className="btn btn-outline"> button</button>
            <button className="btn btn-outline">button</button>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;