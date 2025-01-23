import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    // if no dependency array => useEffect is called on every render
    // if empty dependency array = [] => useEffect is called only on initial render 
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called");
    },[btnNameReact]);


    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-24 " src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        Online Status:{onlineStatus ? "✅": "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                       <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">🛒</li>
                    <button className="login" onClick={() =>{
                        btnNameReact == "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login") ;
                    }}>
                    {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>

            </div>
        </div>
    )
};

export default Header;