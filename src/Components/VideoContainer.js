import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/Constans";
import VideoCard,{AdvideoCard} from "./VideoCard";   
import { Link } from "react-router-dom";

const VideoContainer=()=>{
    const [video,setVideo]=useState([]);
    useEffect(()=>{
        fetchVideos();
    },[])
    const fetchVideos=async ()=>{
       const data=await fetch(YOUTUBE_API);
       const json=await data.json();
    //    console.log(json.items);
       setVideo(json.items)
       
    }
    return <div className="videoHeadContainer">
       {/* {video[0] && <AdvideoCard info={video[0]}/>} */}
             {video.length && video.map((video)=> <Link key={video.id} to={"/Watch?v="+video.id}><VideoCard   info={video}/></Link> )}
    </div>
}
export default VideoContainer;