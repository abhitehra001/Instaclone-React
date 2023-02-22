import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import heart from "../images/heart@2x.png";
import share from "../images/share@2x.png";
import "../styles/postViewPage.css";

const PostViewPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("https://instaclone-nodejs.onrender.com/posts").then(data => {
            console.log(data.data);
            setPosts(data.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return <div id="postViewPage">
        <Header />
        <div id="postContainer">
            {posts.length > 0 ? posts.map((post, key) => {
                return <div className="post" key={key}>
                    <div className="postheader">
                        <div className="postnamebox">
                            <span className="postname">{post.name}</span><br />
                            <span className="postaddress">{post.address}</span>
                        </div>
                        <div className="posticon">...</div>
                    </div>
                    <div className="postimage">
                        <img src={`https://instaclone-nodejs.onrender.com/posts/`+post.postimage} alt={post.postimage} />
                    </div>
                    <div className="postfooter">
                        <div className="postfootertop">
                            <div className="postlikesicons">
                                <img className="postheart posticons" src={heart} alt="likes" />
                                <img className="postshare posticons" src={share} alt="shares" />
                            </div>
                            <div className="postdate">{post.date}</div>
                        </div>
                        <div className="postfooterbottom">{post.likes} likes</div>
                    </div>
                    <div className="postdescription">{post.description}</div>
                </div>
            }) : <div>No posts Yet</div>}
        </div>
    </div>
}

export default PostViewPage;