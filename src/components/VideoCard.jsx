const VideoCard = ({video}) =>{
    const {id, title, description, url, thumbnail, duration} = video;
    return(
        <div className='video-card'>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
            <p><a href={url}>Watch here</a></p>
            <button>Like</button>
            <button>Add to Watch Later</button>
        </div>
    )
}

export default VideoCard;