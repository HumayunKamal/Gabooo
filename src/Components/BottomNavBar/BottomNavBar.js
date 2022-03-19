import React, { useState } from "react";

import { Link } from "react-router-dom";
// style

import classes from "./BottomNavBar.module.scss";

// JSX
const BottomNavBar = () => {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const languageHandler = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };
  const currencyHandler = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
  };
  return (
    <div className={classes.main}>
      <div className={classes.inline}>
        <form className={classes.form}>
          <select
            id="language-select"
            value={language}
            onChange={languageHandler}
          >
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="France">Franch</option>
          </select>
        </form>
        <form className={classes.form}>
          <select
            id="currency-select"
            value={currency}
            onChange={currencyHandler}
          >
            <option value="USD">USD</option>
            <option value="EURO">EURO</option>
            <option value="RS">RS</option>
          </select>
        </form>
      </div>
      <div className={classes.navigation}>
        <Link to="/shopingcart" color="white" underline="none">
          Shoping Cart
        </Link>
        <Link to="/wishlist" color="white" underline="none">
          Wish List (7)
        </Link>
        <Link to="/checkout" color="white" underline="none">
          Checkout
        </Link>
        <Link to="/myaccount" color="white" underline="none">
          My Account
        </Link>
      </div>
      <div className={classes.searchCartButton}>
        <div className={classes.searchBar}>
          <input type="search" placeholder="Search ....." />
          <svg
            className={classes.searchSvg}
            xmlns="http://www.w3.org/2000/svg"
            width="20.369"
            height="16.86"
            viewBox="0 0 20.369 16.86"
          >
            <path
              id="Search_Icon"
              data-name="Search Icon"
              d="M1384.98,619.02a6.412,6.412,0,0,0,11.512,3.893l1.709,1.258a2.231,2.231,0,0,0-.187.87,2.19,2.19,0,0,0,.854,1.739l2.9,2.229a2.192,2.192,0,0,0,3.072-.4l.06-.078a2.187,2.187,0,0,0,.453-1.334v0a2.188,2.188,0,0,0-.852-1.735l-2.9-2.23a2.19,2.19,0,0,0-2.619-.036l-1.83-1.347a6.414,6.414,0,1,0-12.172-2.825Zm15.857,5.2,2.895,2.229h0a.935.935,0,0,1,.365.748.92.92,0,0,1-.193.569l-.06.079a.94.94,0,0,1-.748.365.925.925,0,0,1-.568-.193l-2.9-2.23a.935.935,0,0,1-.363-.746.924.924,0,0,1,.193-.57l.06-.08a.946.946,0,0,1,1.317-.17Zm-4.275-5.2a5.166,5.166,0,1,1-5.164-5.166A5.173,5.173,0,0,1,1396.563,619.02Z"
              transform="translate(-1384.98 -612.602)"
              fill="#fcfcfc"
            />
          </svg>
        </div>
        <div className={classes.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.33"
            height="17.659"
            viewBox="0 0 17.33 17.659"
            className={classes.cartSvg}
          >
            <path
              id="Cart_Icon"
              data-name="Cart Icon"
              d="M1443.35,626.763a1.783,1.783,0,1,0,1.783,1.784A1.784,1.784,0,0,0,1443.35,626.763Zm0,2.344a.561.561,0,1,1,.561-.56A.562.562,0,0,1,1443.35,629.106Zm7.121-2.344a1.783,1.783,0,1,0,1.783,1.783A1.784,1.784,0,0,0,1450.472,626.763Zm0,2.344a.561.561,0,1,1,.56-.561A.561.561,0,0,1,1450.472,629.106Zm4.2-15.989a1.681,1.681,0,0,0-.848-.408l-.07-.01a2.07,2.07,0,0,0-.3-.025h-4.639c-.039,0-.076,0-.113,0h-10.254a.611.611,0,0,0,0,1.223h1.309s0,0,0,0h.051a2.152,2.152,0,0,0-.211.917v9.426a2.143,2.143,0,0,0,2.141,2.138h11.107a.611.611,0,1,0,0-1.223h-11.107a.928.928,0,0,1-.918-.917v-1.409a2.158,2.158,0,0,0,.867.186h8.559a2.909,2.909,0,0,0,2.613-1.851l1.514-4.3.682-1.933a2.025,2.025,0,0,0,.115-.655A1.549,1.549,0,0,0,1454.669,613.117Zm-.773,1.411-2.2,6.233a1.732,1.732,0,0,1-1.459,1.034h-8.559a.928.928,0,0,1-.867-.633v-6.347a.927.927,0,0,1,.916-.917h11.726a.8.8,0,0,1,.162.017c.016,0,.031.007.047.012s.035.011.053.016a.4.4,0,0,1,.121.073.322.322,0,0,1,.1.26A.764.764,0,0,1,1453.9,614.528Z"
              transform="translate(-1437.835 -612.67)"
              fill="#fcfcfc"
            />
          </svg>

          <p>$79.00</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
