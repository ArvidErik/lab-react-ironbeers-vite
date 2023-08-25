import { useState } from "react"
import "./styles/AllBeersPage.css"
import {Link} from "react-router-dom"


function AllBeersPage(props) {

    const [beers, setBeers] = useState(props.beers)
    const [search, setSearch] = useState("")

    const searchLogic = (e) => {
        setSearch(e)

        const newArr = [...beers].filter((beer)=>{
            return beer.name.toLowerCase().startsWith(e)
        })

        setBeers(newArr)
    }

    return (
        <div className="beer-container">
            
            <input type="text" name="search" placeholder="Search" value={search} onChange={(e)=>searchLogic(e.target.value)}/>

            {beers.map((beer)=>{
                return <div className="beer-card">
                    <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url} alt="" />
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    </Link>
                </div>
            })}
        </div>
    )
}

export default AllBeersPage;
