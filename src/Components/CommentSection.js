


const comments=[{
    name: "Andrew Immanuvel",
    text: "where are you going now",
    replies: [],
},
{
    name: "Andrew Immanuvel",
    text: "where are you going now",
    replies: [],
},
{
    name: "Andrew Immanuvel",
    text: "where are you going now",
    replies: [
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [
                {
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [
                        {
                            name: "Andrew Immanuvel",
                            text: "where are you going now",
                            replies: [],
                        },
                    ],
                },
            ],
        },
    ],
},
{
    name: "Andrew Immanuvel",
    text: "where are you going now",
    replies: [],
},
{
    name: "Andrew Immanuvel",
    text: "where are you going now",
    replies: [
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [
                {
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [
                        {
                            name: "Andrew Immanuvel",
                            text: "where are you going now",
                            replies: [],
                        },{
                            name: "Andrew Immanuvel",
                            text: "where are you going now",
                            replies: [],
                        },
                    ],
                },
            ],
        },
    ],
},
{
    name: "Andrew Immanuvel",
    text: "where are you going now",
    replies: [
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },{
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },{
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },{
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },
    ],
},
{
    name: "Andrew Immanuvel",
    text: "where are you going now",
    replies: [
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [],
        },
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [
                {
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },
            ],
        },
        {
            name: "Andrew Immanuvel",
            text: "where are you going now",
            replies: [
                {
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },
                {
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },{
                    name: "Andrew Immanuvel",
                    text: "where are you going now",
                    replies: [],
                },
            ],
        },
    ],
},]


const Comment=({data})=>{
    const {name,text,replies}=data;
    return <div className="commentsSection">
        <div className="commentsectionsmallHeader">
        <div >
           <img alt="UserIcon" className="logoIcons" src="https://tse4.mm.bing.net/th?id=OIP.h1HZ1ubm_zK8NpYDijJi1gHaHa&pid=Api&P=0&h=180"/>

        </div>
            <div>
                <h2>{name}</h2>
                <p>{text}</p>
            </div>
        </div>
        
    </div>
}

const CommentList=({comments})=>{
    return comments && comments.map((c)=>
        <div>
        <Comment data={c}/>
        <div className="replyComment">
        <CommentList comments={c.replies}/>
            
        </div>
        </div>
    )
}

const CommentSection=()=>{
    return <div className="commenHeader">
        <h1>Comments: </h1>
        <CommentList comments={comments}/>
    </div>
}
export default CommentSection;  