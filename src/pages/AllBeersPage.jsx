import { useState } from "react"
import "./styles/AllBeersPage.css"
import {Link} from "react-router-dom"


function AllBeersPage(props) {

    const [beers, setBeers] = useState(props.beers)
    const [search, setSearch] = useState("")



    return (
        <div className="beer-container">
            
            <input type="text" name="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>

            {beers.filter((item)=>{
                return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search) || item.tagline.toLowerCase().includes(search) || item.contributed_by.toLowerCase().includes(search)
            })
            .map((beer)=>{
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
