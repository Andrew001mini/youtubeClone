import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar=()=>{
    const selectores=useSelector((store)=>store.user.isLogin)
    if(!selectores) return null
    return <div className="sideBarDiv">
        <h3>List of Programs</h3>
       <ul>
        <li className="HomeBtn"><Link to="/">Home</Link></li>
        <li>Short</li>
        <li>Subscription</li>
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Your Videos</li>
       </ul>
       <h3>List of Programs</h3>
       <ul>
        <li>Video</li>
        <li>Short</li>
        <li>Subscription</li>
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Your Videos</li>
       </ul>
    </div>
}
export default Sidebar;