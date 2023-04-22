import VideoCard from "../components/VideoCard";
import { useVideos } from "../contexts/VideosContext";

const VideosListing = () =>{
    const {videos, isLoading } = useVideos();
    return(
        <>
            <h1>All videos</h1>
            { isLoading ? 
                (<h2>Loading...</h2>) : 
                    (
                        <div className='all-videos'>
                            {
                                videos.map((video)=>{
                                    return(
                                        <VideoCard key={video.id} video={video}/>
                                    )
                                })
                            }
                        </div>
                    )
                }
        </>
    )
}

export default VideosListing;