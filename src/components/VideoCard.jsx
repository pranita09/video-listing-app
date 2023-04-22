import { useVideos } from "../contexts/VideosContext";

const VideoCard = ({video}) =>{
    const {handleLikedBtn, handleAddToWatchLaterBtn} = useVideos();
    const {id, title, description, url, thumbnail, duration, isLiked, isAddedToWatchLater} = video;
    return(
        <div className='video-card'>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
            <p><a href={url}>Watch here</a></p>
            {
                !isLiked ? (<button onClick={()=>handleLikedBtn(video)}>Like</button>) : (<button disabled>Liked</button>)
            }
            {
                !isAddedToWatchLater ? (<button onClick={()=>handleAddToWatchLaterBtn(video)}>Add to Watch Later</button>) : (<button disabled>Added To Watch Later</button>)
            }
            
        </div>
    )
}

export default VideoCard;