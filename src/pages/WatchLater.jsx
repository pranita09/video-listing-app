import VideoCard from "../components/VideoCard";
import { useVideos } from "../contexts/VideosContext";

const WatchLater = () =>{
    const {videos, isLoading} = useVideos();

    const watchLaterVideos = videos.map(({isAddedToWatchLater})=> isAddedToWatchLater);

    return(
        <>
            {
                isLoading ? 
                    (<h2>Loading...</h2>) : 
                        ( watchLaterVideos.length === 0 ? 
                            (<h1>Add something to watch later!</h1>) : 
                                (
                                    <div className='all-videos'>
                                        {
                                            watchLaterVideos.map((video)=>(
                                                <VideoCard key={video.id} video={video} />
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