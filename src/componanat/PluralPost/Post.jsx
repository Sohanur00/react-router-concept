import { useLoaderData } from "react-router-dom";
import Post2 from "../post2/Post2";


const Post = () => {

    const post = useLoaderData()
    return (
        <div className=" grid grid-cols-3 p-4 bg-cyan-400 gap-5  ">
            <h2 className="bg-orange-400 rounded-lg">Post : {post.length}</h2>
            {
               post.map(post =><Post2 key={post.id} post2={post}></Post2> ) 

            }
        </div>
    );
};

export default Post;