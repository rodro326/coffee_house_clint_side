import { useEffect, useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";



const Home = () => {
    const [coffees,setCoffees] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/coffee')
        .then(res=>res.json())
        .then(data=>setCoffees(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                coffees.map(element=><CoffeeCard 
                    key={element._id}
                    element={element}
                ></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Home;