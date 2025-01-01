
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () =>{
    // const [resInfo,setResInfo] =useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    

    // useEffect(() => {
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API+ + resId  );
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };

    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = restaurantInfo;

    // Extract all menu items across categories
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  
    const allMenuItems = categories
        .filter((category) => category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") // Filter categories
        .map((category) => ({
        categoryName: category.card.card.title,
        items: category.card.card.itemCards.map((item) => item.card.info), // Extract item details
        }));

    return  resInfo == null ? (
        <Shimmer />
    ): (
        <div className="menu">
            <h1>{name || "Unknown Restaurant"}</h1>
            <h2>{cuisines?.join(", ") || "Cuisines not available"}</h2>
            {cloudinaryImageId && (
                <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}`}
                    alt={name}
                />
            )}
            <p>{costForTwoMessage || "Cost information not available"}</p>
            <h2>Menu</h2>
            {allMenuItems.map((category, index) => (
                <div key={index}>
                <h3>{category.categoryName || "Unnamed Category"}</h3>
                <ul>
                    {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                        <strong>{item.name}</strong> - {item.description || "No description available"}
                        <p> </p>
                        <span>
                            Price: ₹{(item.price || item.defaultPrice) / 100 || "Price not available"}
                        </span>
                    </li>
                    
                    ))}
                </ul>
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;