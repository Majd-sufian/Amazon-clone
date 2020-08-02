import React from "react";
// import { useStateValue } from "./StateProvider";
import "./style/Checkout.css";
import { Link } from "react-router-dom";
import CheckoutProduct from "./component/CheckoutProduct";
import Subtotal from "./component/Subtotal";
import { useStateValue } from "./reducer/StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
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

      <div className={basket.length > 0 ? "checkout__right" : "none"}>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;

// 1- split the component to right and left --done
// 2- create a component for the subtotal + css --done
// 3- add the whole content --- how many items -- price -- checkbox -- button
