import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      {/* Accordion Header */}
      <div
        className="w-6/12 mx-auto my-4 flex justify-between items-center py-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-bold text-lg flex-1 text-center">
          {category.categoryName || "Unnamed Category"}
        </h3>
        <span className="text-gray-500">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 6a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 8.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 6z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <ul className="pl-4">
          {category.items.map((item, index) => (
            <li
              key={index}
              className="py-2 border-b last:border-none hover:bg-gray-100 hover:shadow-md rounded-md transition duration-200 ease-in-out flex justify-between items-center"
            >
              {/* Text Content */}
              <div className="flex-1">
                <div className="font-semibold hover:text-blue-600">{item.name}</div>
                <div className="text-sm text-gray-600">
                  {item.description || "No description available"}
                </div>
                <div className="text-sm text-gray-800">
                  Price: ₹{(item.price || item.defaultPrice) / 100 || "Price not available"}
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                {item.imageId && (
                  <img
                    src={CDN_URL + item.imageId}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}
                <button className="p-2 bg-white shadow-lg rounded-full text-sm text-gray-700">
                  Add +
                </button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
