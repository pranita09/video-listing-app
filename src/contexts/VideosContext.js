import { createContext, useContext } from "react";

export const VideosContext = createContext();

export const VideosProvider = ({children}) =>{
    return(
        <VideosContext.Provider>
            {children}
        </VideosContext.Provider>
    )
}

export const useVideos = () => useContext(VideosContext);