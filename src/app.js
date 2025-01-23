import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 *  -resturantCard
 * Footer
 * -Copyrignt
 * -Links
 * -Address
 * -Contact
 * 
 * 
 */

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));


const AppLayout = () => {

    // authentication 
    const [userName,setUserName] = useState();
    useEffect(() => {
        // make an api call and send username and password
        const data ={
            name:"Avin dsouza",
        };
        setUserName(data.name)
    }, []);
    return(
        <UserContext.Provider value ={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
                
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading .....</h1>}><Grocery /></Suspense>,
                errorElement: <Error />
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />,
                errorElement: <Error />
            },

        ],
        errorElement: <Error />,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);






