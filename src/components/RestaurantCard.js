import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;

    const { 
        cloudinaryImageId, 
        name, 
        avgRating,
        cuisines,
        costForTwo,
        sla} = resData?. info;

    if (resData) {
        return (
            <div className="res-card" >
                <img
                    className="res-logo"
                    alt="Restaurant logo"
                    src={CDN_URL+ cloudinaryImageId }
                />
                <h3>{name}</h3>
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

export default RestaurantCard;