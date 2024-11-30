import React from "react";
import ReactDOM from "react-dom/client";

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
const Header = () => {
    return(
        <div className="header">
            <div>
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>🛒</li>
                </ul>

            </div>
        </div>
    )
};

const styleCard = {
    // backgroundColor: "#f0f0f0",
    // padding: "10px",
    // margin: "10px",
    // borderRadius: "5px",
    // boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
};

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
            <div className="res-card" style={styleCard}>
                <img
                    className="res-logo"
                    alt="Restaurant logo"
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        cloudinaryImageId
                    }
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
        <div className="res-card" style={styleCard}>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{timing}</h4>
        </div>
    );
};

const resList =[
    {
      "info": {
        "id": "10575",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
        "locality": "Richmond Town",
        "areaName": "Shanti Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹189"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "1.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23847",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/a6dfc662-f040-4e87-b5e4-daef000ddedf_23847.jpg",
        "locality": "MG Road",
        "areaName": "Brigade Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "5.9K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 22:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹1199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "4.8K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "43836",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
        "locality": "MG Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "25K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 02:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "588619",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/ab13ff98-4cb5-4062-bef6-1738d5d5ed45_588619.JPG",
        "locality": "Brigade Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "342"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "5938",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG",
        "locality": "Tasker Town",
        "areaName": "Shivaji Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "37K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "48230",
        "name": "Kanti Sweets",
        "cloudinaryImageId": "u0hhfifwmpsnobytv2yf",
        "locality": "Brigade Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Sweets"
        ],
        "avgRating": 4.7,
        "parentId": "4700",
        "avgRatingString": "4.7",
        "totalRatingsString": "6.0K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "1.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-brigade-road-central-bangalore-rest48230",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "622202",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
        "locality": "Langford Road",
        "areaName": "Shantinagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "11329",
        "avgRatingString": "4.6",
        "totalRatingsString": "540",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-shantinagar-rest622202",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "643832",
        "name": "WeFit - Protein Bowls, Salads & Sandwiches",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/59e251dc-b6d9-4566-97c3-931b83ef7061_643832.JPG",
        "locality": "Langford Road",
        "areaName": "Santhinagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto",
          "Snacks"
        ],
        "avgRating": 4.7,
        "parentId": "355285",
        "avgRatingString": "4.7",
        "totalRatingsString": "546",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-rest643832",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "750396",
        "name": "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
        "locality": "Lakshmi Road",
        "areaName": "Langford Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Thalis"
        ],
        "avgRating": 4.5,
        "parentId": "444382",
        "avgRatingString": "4.5",
        "totalRatingsString": "449",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "10-20 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-lakshmi-road-langford-road-rest750396",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "681612",
        "name": "LeanCrust Pizza- ThinCrust Experts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
        "locality": "Lakshmi Road",
        "areaName": "Shanti Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Desserts"
        ],
        "avgRating": 4.7,
        "parentId": "11216",
        "avgRatingString": "4.7",
        "totalRatingsString": "307",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-shanti-nagar-rest681612",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "69876",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
        "locality": "UB City",
        "areaName": "Central Bangalore",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "2",
        "avgRatingString": "4.4",
        "totalRatingsString": "3.6K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "282"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-ub-city-central-bangalore-rest69876",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "426730",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/18/69bdab11-7a14-4817-be10-7a343a32ebd8_426730.JPG",
        "locality": "Lavelle Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Beverages"
        ],
        "avgRating": 4.7,
        "parentId": "1040",
        "avgRatingString": "4.7",
        "totalRatingsString": "5.0K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "420"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "570511",
        "name": "Bakingo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/c795c5d6-96d4-409a-8106-3c3ba1f4253c_570511.JPG",
        "locality": "Puhlong X-road",
        "areaName": "Vasanth Nagar",
        "costForTwo": "₹299 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "3818",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.6K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "396108",
        "name": "Suzy Q",
        "cloudinaryImageId": "als9xfk5lkrvizbq3lhx",
        "locality": "Cunningham Road",
        "areaName": "Cunningham Road",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Indian",
          "Continental",
          "Seafood",
          "Asian",
          "Chaat",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "454247",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "3.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/suzy-q-cunningham-road-rest396108",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "352792",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "garnimnzruqmizx2acjt",
        "locality": "Robertson Road",
        "areaName": "Frazer Town",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.8",
        "totalRatingsString": "518",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/grameen-kulfi-robertson-road-frazer-town-rest352792",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "503003",
        "name": "ZAZA Mughal Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d26bdfca-3b50-41ea-87e1-e7f9a6b0581d_503003.jpg",
        "locality": "Lakshmi Nagar Road",
        "areaName": "Shanti Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Awadhi"
        ],
        "avgRating": 4.5,
        "parentId": "22473",
        "avgRatingString": "4.5",
        "totalRatingsString": "467",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "10-20 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-lakshmi-nagar-road-shanti-nagar-rest503003",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "503002",
        "name": "NH1 Bowls - Highway To North",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/aea607a6-5ce6-4fe6-b7d1-7ba2bacdc647_503002.jpg",
        "locality": "Lakshmi Road",
        "areaName": "Shanti Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Home Food"
        ],
        "avgRating": 4.7,
        "parentId": "22452",
        "avgRatingString": "4.7",
        "totalRatingsString": "639",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "10-20 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-30 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-rest503002",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86443",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/33a519c1-7d16-45f5-8051-c1c9d9ecfd58_86443.jpg",
        "locality": "Pulikeshi Nagar",
        "areaName": "Frazer Town",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.7",
        "totalRatingsString": "8.6K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "Ratnesh_Badges/test2.png",
              "shortDescription": "Perfect ice cream delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Ratnesh_Badges/test2.png",
                    "shortDescription": "Perfect ice cream delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/nic-ice-creams-pulikeshi-nagar-frazer-town-rest86443",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "396746",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/51c1b7c8-2bc5-43c6-99f1-2c6ea15ff0e7_396746.JPG",
        "locality": "Residency Road",
        "areaName": "Shantinagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Ice Cream",
          "Snacks"
        ],
        "avgRating": 4.4,
        "parentId": "4444",
        "avgRatingString": "4.4",
        "totalRatingsString": "230",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-residency-road-shantinagar-rest396746",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "219460",
        "name": "Native Table by Go Native",
        "cloudinaryImageId": "459ac48ea894c6322f64b58cfcf5d3e8",
        "locality": "Ashok Nagar",
        "areaName": "Central Bangalore",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Healthy Food",
          "Jain",
          "South Indian"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "10539",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-29 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.6",
            "ratingCount": "1.2K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-322f6825-b66d-40c6-a588-c78155f2a29a"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/native-table-by-go-native-ashok-nagar-central-bangalore-rest219460",
        "type": "WEBLINK"
      }
    }
  ];

  // not using keys (not acceptable) <<<< index a s key <<< unique id ( best practice)

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id}resData={restaurant}/>
                ))}
                
                

            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);




