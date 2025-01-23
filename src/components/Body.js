import RestaurantCard, {withPromptedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
 
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // Original data

  // Local State Variable - Super powerful variable

  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");

  const RestaurantCardPromoted = withPromptedLabel(RestaurantCard);


  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() =>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); 

    const json = await data.json();

    console.log(json);
    //Optional Chaining
    const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(restaurants); // Set original data
      setListOfRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false){
    return (
    <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }
  
  const {loggedInUser, setUserName } = useContext(UserContext);
  // Conditional Rendering
  if(listOfRestaurants.length == 0) {
    return <Shimmer/>;
  }

    return(
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filteredRestaurant = allRestaurants.filter((res) =>
                  res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                );
                setListOfRestaurant(filteredRestaurant); // Update the displayed data
              }}
            >
              Search
            </button>
          </div>
              <div className="search m-4 p-4 flex items-center rounded-lg">
              <button className="px-4 py-2 bg-gray-100" 
              onClick={() => {
                
                // Filter Logic here
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.6
                );
                setListOfRestaurant(filteredList);
                } }
                >
                  Top Rated Restaurants
                </button>
              </div>
              <div className="search m-4 p-4 flex items-center rounded-lg">
                <label>Username : </label>
              <input className="border border-black p-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
              </div>
              <div className="search m-4 p-4 flex items-center rounded-lg">
              <button className="px-4 py-2 bg-gray-100" onClick={() => {
                    setListOfRestaurant(allRestaurants);
                  }}>Reset</button>
              </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    listOfRestaurants.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id }>
                      { restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>) : <RestaurantCard resData={restaurant}/>}
                      <RestaurantCard resData={restaurant}/>
                    </Link>
                ))}
                
                

            </div>
        </div>
    )
}






  // not using keys (not acceptable) <<<< index a s key <<< unique id ( best practice)

export default Body;