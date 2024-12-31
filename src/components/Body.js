import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
 
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // Original data

  // Local State Variable - Super powerful variable

  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");


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
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(restaurants); // Set original data
      setListOfRestaurant(restaurants);
  };
  
  // Conditional Rendering
  if(listOfRestaurants.length == 0) {
    return <Shimmer/>;
  }

    return(
        <div className="body">
            <div className="filter">
            <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-btn"
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
              <button className="filter-btn" 
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
                <button onClick={() => {
                    setListOfRestaurant(allRestaurants);
                  }}>Reset</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id }><RestaurantCard resData={restaurant}/></Link>
                ))}
                
                

            </div>
        </div>
    )
}






  // not using keys (not acceptable) <<<< index a s key <<< unique id ( best practice)

export default Body;