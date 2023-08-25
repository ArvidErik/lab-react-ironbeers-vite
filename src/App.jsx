import "./App.css";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import Navbar from "./components/Navbar"
import { useEffect } from "react";
import { useState } from "react";



function App() {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)

  
  useEffect(()=>{
    const beersAPI = "https://ih-beers-api2.herokuapp.com/beers"

    fetch(beersAPI)
    .then((res)=>{
      return res.json()
    })
    .then((beers)=>{
      setLoading(false)
      setBeers(beers)
      console.log(beers);
    })
    .catch(err => console.log(err))

  }, [])

  return (
    <div className="App">
    <Navbar/>
    <h1>LAB | React IronBeers</h1>
    {loading ?
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f430a36197347.57135ca19bbf5.gif" alt="" />
    :
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<AllBeersPage beers={beers}/>}/>
        <Route path="/random-beer" element={<RandomBeerPage/>}/>
        <Route path="/new-beer" element={<AddBeerPage/>}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>
    </Routes>
    }
    </div>
  );
}

export default App;
