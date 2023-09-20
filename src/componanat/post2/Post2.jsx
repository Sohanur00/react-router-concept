/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Post2 = ({post2}) => {

    const {id, title} =post2;
    return (
        <div className="bg-amber-200 rounded-lg">
            <h4>Post id : {id}</h4>
            <p>{title}</p>
            <Link className="bg-red-600 p-2 rounded-lg" to={`/post2/${id}`}>Post details</Link>
            <Link to={`/post2/${id}`}><button className="bg-slate-400 p-2 rounded-lg">Show details</button></Link>
        </div>
    );
};

export default Post2;