import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice"; // Ensure the clearCart action is imported

const Cart = () => {
  // Fetching cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart()); // Fixed to properly invoke the action
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      {/* Conditional rendering for empty and non-empty cart */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="cart-item-list mx-auto w-6/12 border border-gray-300 rounded-md shadow-lg p-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="py-2 border-b last:border-none flex justify-between items-center"
              >
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    Price: ₹{(item.price || item.defaultPrice) / 100}
                  </div>
                </div>
                {item.imageId && (
                  <img
                    src={item.imageId}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                )}
              </li>
            ))}
          </ul>
          {/* Clear Cart Button */}
          <button
            onClick={handleClearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-700"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
