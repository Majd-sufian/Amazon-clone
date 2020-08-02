import React from "react";
import { useStateValue } from "./StateProvider";
import "./style/Checkout.css";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <img
        className="checkbox__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="Amazon Ads"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <h2>Add items to your Basket</h2>
          <Link to="/">
            <button>Shop</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="checkbox__title">Your Shopping Basket</h2>

          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
