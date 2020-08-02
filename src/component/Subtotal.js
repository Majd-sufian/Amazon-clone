import React from "react";
import "../style/Subtotal.css";
// import { useStateValue } from "./StateProvider";
import numeral from "numeral";
import { useStateValue } from "../reducer/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  let price = 0;

  let sub = basket.map((item) => (price += item.price));

  return (
    <div className="subtotal">
      <div className="subtotal__items">
        <span className="subtotal__length">
          Subtotal ({basket.length} item):
        </span>
        <span className="subtotal__price">${numeral(price).format(0, 0)}</span>
      </div>

      <div className="subtotal__checkbox">
        <input type="checkbox" />
        <span>This order contains a gift</span>
      </div>

      <button>Procced To checkout</button>
    </div>
  );
}

export default Subtotal;
