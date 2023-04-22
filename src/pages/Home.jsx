import { NavLink } from "react-router-dom";

const Home = () =>{
    return (
        <div className='home'>
            <h2>Welcome to video library.</h2>
            <h2>To browse all videos, click the below button or go to the videos page.</h2>
            <button>
                <NavLink to='/all-videos'>Explore Videos</NavLink>
            </button>
        </div>
    )
}

export default Home;