/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({user}) => {
const {id, name, email, phone} =user;


    return (
        <div className="bg-yellow-200 border p-4 rounded-lg gap-5">
         
            <h2 className="bg-orange-50">Name : {name}</h2>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            <Link to={`/user/${id}`}> Show Details</Link>
           
        </div>
    );
};

export default User;