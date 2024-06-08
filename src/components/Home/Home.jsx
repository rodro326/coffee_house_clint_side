import { useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";



const Home = () => {
    const loadCoffees = useLoaderData()
    const [remaining,setRemaining] = useState(loadCoffees)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                remaining.map(element=><CoffeeCard 
                    key={element._id}
                    element={element}
                    remaining={remaining}
                    setRemaining={setRemaining}
                ></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Home;