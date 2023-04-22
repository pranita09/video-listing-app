import {NavLink} from 'react-router-dom';

const Header = () =>{
    return (
        <>
            <nav>
                <NavLink className='navlink' to='/'>Home</NavLink>
                <NavLink className='navlink' to='/all-videos'> Videos</NavLink>
                <NavLink className='navlink' to='/liked-videos'> Liked Videos</NavLink>
                <NavLink className='navlink' to='/watch-later'> Watch Later</NavLink>
            </nav>
        </>
    )
}

export default Header;