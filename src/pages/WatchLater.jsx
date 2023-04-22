import VideoCard from "../components/VideoCard";
import { useVideos } from "../contexts/VideosContext";

const WatchLater = () =>{
    const {videos, isLoading} = useVideos();

    const watchLaterVideos = videos.filter(({isAddedToWatchLater})=> isAddedToWatchLater);

    return(
        <>
            <h1>Watch Later</h1>
            {
                isLoading ? 
                    (<h2>Loading...</h2>) : 
                        ( watchLaterVideos.length === 0 ? 
                            (<h2>Add something to watch later!</h2>) : 
                                (
                                    <div className='all-videos'>
                                        {
                                            watchLaterVideos.map((video)=>(
                                                <VideoCard key={video.id} video={video} watchLater/>
                                            ))
                                        }
                                    </div>
                                )
                        )
            }
        </>
    )
}

export default WatchLater;