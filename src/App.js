import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles.css";
import Home from "./pages/Home";
import VideosListing from "./pages/VideosListing";
import LikedVideos from "./pages/LikedVideos";
import WatchLater from "./pages/WatchLater";
import IndividualVideo from "./pages/IndividualVideo";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all-videos' element={<VideosListing/>} />
        <Route path='/liked-videos' element={<LikedVideos/>} />
        <Route path='/watch-later' element={<WatchLater/>} />
        <Route path='/videos/:videoId' element={<IndividualVideo />} />
      </Routes>
    </div>
  );
}
