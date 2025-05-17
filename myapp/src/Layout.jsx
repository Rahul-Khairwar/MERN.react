import {link,Outlet} from "react-router-dom"
const Layout=()=>{

    return(
        <>

        <link to="home">Home</link>
        <link to="about">About us </link>
        <link to="contact">Contact</link>
        
        <hr size="4" color="red" />

        <Outlet/>
        
        <hr size="4" color="red" />
        www.mycompany.com alll rights reserved.
        </>
    )


}
export default Layout

