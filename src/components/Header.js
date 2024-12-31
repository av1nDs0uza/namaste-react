import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array => useEffect is called on every render
    // if empty dependency array = [] => useEffect is called only on initial render 
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called");
    },[btnNameReact]);


    return(
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>🛒</li>
                    <button className="login" onClick={() =>{
                        btnNameReact == "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login") ;
                    }}>
                    {btnNameReact}
                    </button>
                </ul>

            </div>
        </div>
    )
};

export default Header;