import {  useLoaderData } from "react-router-dom";


const PostDetils = () => {

    const post = useLoaderData ();

    const {id,title, body} = post;
    return (
        <div className="bg-lime-100 p-4">
            <h3>Post details : </h3>
            <p>{id}</p>
            <p> title :{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetils;