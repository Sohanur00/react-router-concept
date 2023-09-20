import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
const user =useLoaderData();
const {name,phone,email,street} =user;
    return (
        <div>
            <h2>Details about user :{name} </h2>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            <p>street : {street}</p>
        </div>
    );
};

export default UserDetails;