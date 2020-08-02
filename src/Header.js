import React from "react";
import "./style/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="AMAZON"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Hello,</span>
            <span className="header__option__lineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">&Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__option__lineTwo header__baskerCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

// logo in the left --done
// search box --done
// 3 links --- login --- orders --- your prime --done
// basket icon --done
