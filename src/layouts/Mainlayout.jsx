import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            
            <div className="min-h-[calc(100vh-116px)]"> 
            <Outlet></Outlet>
            </div>

            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;