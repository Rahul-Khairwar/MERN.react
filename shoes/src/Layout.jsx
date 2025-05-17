import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import TopNav from "./Component/Topnav";

const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main style={{margin:"10px"}}>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}

export default Layout;