
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div className="text-center mt-2 font-bold">
            <Header></Header>
           <Outlet></Outlet>

      <Footer></Footer>
        </div>
    );
};

export default Home;