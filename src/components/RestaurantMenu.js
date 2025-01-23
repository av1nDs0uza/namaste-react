
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


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
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name || "Unknown Restaurant"}</h1>
            <h2 className="font-bold my-2 text-xl">{cuisines?.join(", ") || "Cuisines not available"}</h2>
            {cloudinaryImageId && (
                <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}`}
                    alt={name}
                />
            )}
            <p className="font-bold text-lg">{costForTwoMessage || "Cost information not available"}</p>
            <h2 className="font-bold my-2 text-xl">Menu</h2>
            {allMenuItems.map((category, index) => (
                <RestaurantCategory key={index} category={category} />
            ))}
        </div>
    );
};

export default RestaurantMenu;