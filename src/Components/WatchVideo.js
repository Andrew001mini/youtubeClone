import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";

const WatchVideo=()=>{
    const [searchParams]=useSearchParams();
    console.log(searchParams);
    
    const dispatch=useDispatch();

    useEffect(()=>{
     dispatch(closeMenu())
    },[])
    return <div className="watcVideoCardHeader">
        <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
        <CommentSection/>
    </div>
}
export default WatchVideo;