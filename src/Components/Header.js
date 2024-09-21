import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../Utils/menuSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_APi } from "../Utils/Constans";
import fetchJsonp from "fetch-jsonp";
import  { addData } from "../Utils/checkingSlice";

const Header=()=>{
    const dispatch=useDispatch();
    const searcData=useSelector((store)=>store.Check);
    

    const handleToggle=()=>{
        dispatch(addMenu());
    }
    const [searchQuery,setSearchQuery]=useState("");
    const [searchResponse,setSearchResponse]=useState([]);
    const [showSuggestions,setshowSuggestions]=useState(false);
    useEffect(()=>{
  const timer=setTimeout(()=>{
          if(searcData[searchQuery]){
            setshowSuggestions(searcData[searchQuery])
          }else{
            handleSearch();
          }
      },200)
      return ()=>{
        clearTimeout(timer);
      }
},[searchQuery])
const handleSearch = async () => {
    try {
        const response = await fetchJsonp(YOUTUBE_SEARCH_APi + searchQuery);
        const json = await response.json();
        console.log("APicalled :"+ searchQuery);
        setSearchResponse(json[1]);
        dispatch(addData({
            [searchQuery] : json[1]
        }))
    } catch (error) {
        console.error("Failed to fetch or parse JSONP", error);
    }
};
    return <div className="headerContainer">
        <div className="headOfTheAmberganIcon"><img className="logoIcons" onClick={()=>handleToggle()} alt="amberganMenu" src="https://s.yimg.com/zb/imgv1/d766267d-f582-386c-b3bc-fe9140be7327/t_500x300"/>
        <img  alt="youtubeLogo" className="logoIcons1" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/></div>
        <div>
            <input value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
             onFocus={()=>setshowSuggestions(true) } 
             onBlur={()=>setshowSuggestions(false)} 
              type="text" className="inputBox" placeholder="Search" />
            
            <button className="searchIconBtn">🔍</button>
            {showSuggestions &&<ul className="searchtextSuggestions">
                {searchResponse.map((response)=><li key={response}>🔍 {response}</li>)}
                
            </ul>}
        </div>
        <div>
            <img alt="videoCreateIcon" className="logoIcons" src="https://cdn-icons-png.flaticon.com/128/1170/1170696.png"/>
            <img alt="notificationIcon" className="logoIcons" src="https://tse2.mm.bing.net/th?id=OIP.Zr2LCGLtfVln9Fq8_dpVWgHaH_&pid=Api&P=0&h=180"/>
            <img alt="UserIcon" className="logoIcons" src="https://tse4.mm.bing.net/th?id=OIP.h1HZ1ubm_zK8NpYDijJi1gHaHa&pid=Api&P=0&h=180"/>
        </div>
    </div>
}
export default Header;