import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;

    const { 
        cloudinaryImageId, 
        name, 
        avgRating,
        cuisines,
        costForTwo,
        sla} = resData?.info;

    if (resData) {
        return (
            <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" >
                <img
                    className="rounded-lg"
                    alt="Restaurant logo"
                    src={CDN_URL+ cloudinaryImageId }
                />
                <h3 className="font-bold py-3 text-lg">{name}</h3>
                <p><b>{cuisines.join(", ")}</b></p>
                <p><b>Rating: {avgRating}</b></p>
                <p><b>{costForTwo}</b></p>
                <p><b>Delivery: {sla.deliveryTime} mins</b></p>
            </div>
        );
    }

    return (
        <div className="res-card" >
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{timing}</h4>
        </div>
    );
};

// Higher Order Component

// input - RestaurantCard => RestaurabtCardPromoted

export const withPromptedLabel =(RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;