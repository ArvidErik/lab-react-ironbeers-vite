import { useState } from "react";
import { useNavigate} from "react-router-dom"
import "./styles/AddBeerPage.css"

function AddBeerPage() {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(50)
    const [contributed_by, setContributedBy] = useState("")

    const navigate = useNavigate()

    function submitHandler (e) {

        e.preventDefault()

        const api = "https://ih-beers-api2.herokuapp.com/beers/new"
        
        const body = {
            name:name,
            tagline:tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }

        fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("data: ", data);
                navigate("/beers")
            })
            .catch((error) => console.log(error));
    }



    return(
        <div className="form-cont">
            <form action="" onSubmit={submitHandler}>

                <input type="text" name="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" name="tagline" placeholder="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/>
                <textarea type="text" name="description"placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <input type="text" name="first_brewed"placeholder="first_brewed" value={first_brewed} onChange={(e)=>setFirstBrewed(e.target.value)}/>
                <input type="text" name="brewers_tips"placeholder="brewers_tips" value={brewers_tips} onChange={(e)=>setBrewersTips(e.target.value)}/>
                <input type="number" name="attenuation_level"placeholder="attenuation_level" value={attenuation_level} onChange={(e)=>setAttenuationLevel(e.target.value)}/>
                <input type="text" name="contributed_by"placeholder="contributed_by" value={contributed_by} onChange={(e)=>setContributedBy(e.target.value)}/>
                <button type="submit">Add Beer</button>

            </form>
        </div>
    )
}

export default AddBeerPage;
