import beersImg from "../assets/beers.png"
import randomImg from "../assets/random-beer.png"
import newImg from "../assets/new-beer.png"
import {Link} from "react-router-dom"
import "./styles/HomePage.css"



function HomePage() {
    return (
        <div className="home-container">
            <div>
                <Link to={"/beers"}>
                <img src={beersImg} alt="" />
                <h2>All Beers</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos porro repudiandae sint non ipsum, necessitatibus, quo dolore mollitia eligendi obcaecati a rerum dolor consequuntur placeat doloremque, saepe id inventore!</p>
                </Link>
            </div>
            <div>
                <Link to={"/random-beer"}>
                <img src={randomImg} alt="" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum tempore, impedit commodi, eveniet sint ea sapiente, iure mollitia in architecto consequuntur unde maiores animi sunt quis libero deserunt nesciunt?</p>
                </Link>
            </div>
            <div>
                <Link to={"/new-beer"}>
                <img src={newImg} alt="" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio accusantium inventore temporibus eos quos dolore similique culpa iure blanditiis tenetur facere quaerat vitae consequatur sit iusto, vel a sequi consequuntur.</p>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;
