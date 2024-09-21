const VideoCard=({info})=>{
    // console.log(info);
    
    const {snippet}=info;
    const {channelTitle,title,publishedAt,thumbnails}=snippet;
    const {medium}=thumbnails;
    // console.log(snippet);
    
    
    return <div className="videoCardContainer">
        <div className="imageHeadContainer">
        <img className="yotubeImage" alt={channelTitle+"Image"} src={medium.url}/>
        </div>
        <h3>{title}</h3>
        <h5>{channelTitle}</h5>
        <p><span>Viewers: </span>{info?.statistics?.viewCount}</p>
        <p><span>published: </span>{publishedAt}</p>
    </div>
}

// export const AdvideoCard=({info})=>{
//     return <div className="newcontainer"><VideoCard info={info }/></div>
// }
export default VideoCard;