import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className=" bg-lime-300">
            <span>My website</span>
            <nav className="p-4">

                <Link className="p-4  hover:bg-orange-300" to="/">Home</Link>
                <Link className="p-4  hover:bg-orange-300" to="/about">About</Link>
                <Link className="p-4  hover:bg-orange-300" to="/contact" >contact us</Link>
                <Link className="p-4  hover:bg-orange-300" to="/users" >users</Link>
                <Link className="p-4  hover:bg-orange-300" to="/post" >Post</Link>


            </nav>

        </div>
    );
};

export default Header;