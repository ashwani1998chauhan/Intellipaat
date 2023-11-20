import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
            <nav >
        <ul style={{display:"flex", justifyContent:'space-around',listStyle:"none",backgroundColor:'lightgrey', height:'5vh',
                        alignItems:'center'}}>

        <li ><Link to='/Home'>Home</Link></li>
        <li><Link to='/product'>Products</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/'>Login</Link></li>
        </ul>
    </nav>
        </div>
    );
}
export default Navbar;