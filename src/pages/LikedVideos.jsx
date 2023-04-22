import VideoCard from "../components/VideoCard";
import { useVideos } from "../contexts/VideosContext";

const LikedVideos = () =>{
    const {videos, isLoading} = useVideos();

    const likedVideos = videos.filter(({isLiked})=> isLiked)
    return(
        <>
          {
            isLoading ? 
                (<h2>Loading...</h2>) : 
                    ( likedVideos.length === 0 ? 
                        (<h2>Like something!</h2>) : 
                            (
                                <div className='all-videos'>
                                    {
                                        likedVideos.map((video)=> (
                                            <VideoCard key={video.id} video={video}/>
                                            )
                                        ) 
                                }
                                </div>
                            )                            
                    )
          }  
        </>
    )
}

export default LikedVideos;