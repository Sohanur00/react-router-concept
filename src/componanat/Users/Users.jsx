
import { useLoaderData } from "react-router-dom";
import User from "../user/User";


const Users = () => {

    const users = useLoaderData();


    console.log(users)


    return (
        <div className="bg-orange-600">
            <h2>Our Users: {users.length}</h2>
            <p> <small>fantasic users</small> </p>
            <div className="grid grid-cols-3 gap-4 ">
                {
                    users.map(user => <User key={user.id} user={user}></User>)

                }

            </div>
        </div>
    );
};

export default Users;