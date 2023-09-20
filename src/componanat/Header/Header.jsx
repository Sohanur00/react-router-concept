import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <span>My website</span>
            <nav className="p-4">

                <Link className="p-4  hover:bg-orange-300" to="/">Home</Link>
                <Link className="p-4  hover:bg-orange-300" to="/about">About</Link>
                <Link className="p-4  hover:bg-orange-300" to="/contact">Contact</Link>
                <Link className="p-4  hover:bg-orange-300" to="/users">Users</Link>




            </nav>

        </div>
    );
};

export default Header;