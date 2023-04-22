import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakefetch";

export const VideosContext = createContext();

export const VideosProvider = ({children}) =>{

    const [videos, setVideos] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getData = async() =>{
        setIsLoading(true);
        try {
            const response = await fakeFetch('https://example.com/api/videos');
            if(response.status === 200){
                setVideos(response.data.videos)
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    const handleLikedBtn = (videoToLike) =>{
        const updatedVideos = videos.map((video)=> video.id === videoToLike.id ? {...video, isLiked: true} : video);
        setVideos(updatedVideos);
    }

    const handleAddToWatchLaterBtn = (videoToAdd) =>{
        const updatedVideos = videos.map((video)=> video.id === videoToAdd.id ? {...video, isAddedToWatchLater: true} : video);
        setVideos(updatedVideos)
    }

    return(
        <VideosContext.Provider value={{ videos, isLoading, handleLikedBtn, handleAddToWatchLaterBtn}}>
            {children}
        </VideosContext.Provider>
    )
}

export const useVideos = () => useContext(VideosContext);