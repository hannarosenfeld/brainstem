import "./Post.css"
import Markdown from "react-markdown"

export default function Post({ post }) {
    return(
        <div className="post">
            <h1>{post.title}</h1>
            <small>{post.date}</small>
            <br/>
            <div className="post-content">
                <Markdown>{post.content}</Markdown>
            </div>
        </div>
    )
}