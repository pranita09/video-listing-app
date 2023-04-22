import {NavLink} from 'react-router-dom';
import { useVideos } from '../contexts/VideosContext';

const Header = () =>{

    const {videos} = useVideos();
    
    const likedVideosCount = videos.reduce((acc, {isLiked})=> isLiked ? acc+1 : acc,0);
    const watchLaterVideosCount = videos.reduce((acc, {isAddedToWatchLater})=> isAddedToWatchLater ? acc+1 : acc,0)

    return (
        <>
            <nav>
                <NavLink className='navlink' to='/'>Home</NavLink>
                <NavLink className='navlink' to='/all-videos'> Videos</NavLink>
                <NavLink className='navlink' to='/liked-videos'> Liked Videos ({likedVideosCount})</NavLink>
                <NavLink className='navlink' to='/watch-later'> Watch Later ({watchLaterVideosCount})</NavLink>
            </nav>
        </>
    )
}

export default Header;