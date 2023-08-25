import { useState } from "react";
import { useEffect } from "react";

function RandomBeersPage () {

    const [beer, setBeer] = useState({})

    const api = "https://ih-beers-api2.herokuapp.com/beers/random"
    
    useEffect(()=>{
        fetch(api)
        .then((res)=>{
            return res.json()
        })
        .then((beer)=>{
            console.log(beer);
            setBeer(beer)
        })
        .catch(err => console.log(err))
    },[])


    return (
        <div className="beer-container">
        <img src={beer.image_url} alt="" />
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        </div>
    )
}
export default RandomBeersPage;
