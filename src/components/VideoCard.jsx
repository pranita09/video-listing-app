import { NavLink } from "react-router-dom";
import { useVideos } from "../contexts/VideosContext";

const VideoCard = ({video, likedVideos, watchLater, individualVideo}) =>{
    const {handleLikedBtn, handleAddToWatchLaterBtn} = useVideos();
    const {id, title, description, url, thumbnail, duration, isLiked, isAddedToWatchLater} = video;
    return(
        <div className='video-card'>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
            <p><NavLink to={`/videos/${id}`}>Watch here</NavLink></p>
            {
                individualVideo && (
                    <>
                        <p><b>Description: {description}</b></p>
                        <p><i>Duration: {duration}</i></p>
                    </>
                )
            }
            {
                !likedVideos && (
                    <button disabled={isLiked} onClick={()=>handleLikedBtn(video)}>{isLiked ? 'Liked' : 'Like'}</button>
                )
            }
            {
                !watchLater && (
                    <button disabled={isAddedToWatchLater} onClick={()=>handleAddToWatchLaterBtn(video)}>{isAddedToWatchLater ? 'Added' : 'Add'} to Watch Later</button>
                )
            }
        </div>
    )
}

export default VideoCard;