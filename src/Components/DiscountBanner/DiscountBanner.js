import { Link } from "react-router-dom";
import classes from "./DiscountBanner.module.scss";

const DiscountBanner = () => {
  return (
    <div className={classes.discountBanner}>
      <h2>Season Sale</h2>
      <Link to="/seasonSale">
        <h1>UP TO 70% OFF</h1>
      </Link>
    </div>
  );
};

export default DiscountBanner;
