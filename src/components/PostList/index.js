import postlist from "../../posts.json"
import Post from "../Post.js"
import "./PostList.css"

export default function PostList() {
    console.log("🐥 postlist", postlist)
    return(
        <div className="postlist">
            { postlist.length && 
                postlist.map((post, i) => (
                    <Post post={post} />
                ))}
        </div>
    )
}