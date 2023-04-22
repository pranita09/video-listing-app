import { useParams } from "react-router-dom";
import { useVideos } from "../contexts/VideosContext"
import VideoCard from "../components/VideoCard";

const IndividualVideo = () =>{
    const {videoId} = useParams();
    const {videos, isLoading} = useVideos();

    const videoToDisplay = videos.find(({id})=> id === +(videoId))

    return (
        <>
            {
                isLoading ? 
                    (<h2>Loading...</h2>) :
                        ( videoToDisplay===undefined ?      (<h2>Error...</h2>) : 
                            ( 
                                <>
                                    <h2>{videoToDisplay.title}</h2>
                                    <VideoCard video={videoToDisplay} individualVideo /> 
                                </>
                            ) 
                        )
            }
        </>
    )
}

export default IndividualVideo