import classes from "./Header.module.scss";
import HeaderImage from "../../Assets/image/header.jpg";
import Button from "../UI/Button";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.description}>
        <h1>FASHION THAT LIKES TO SAY YES</h1>
        <Button className={classes.button} to="/shopNow">
          Shop Now
        </Button>
      </div>
      <div className={classes.image}>
        <img src={HeaderImage} alt="girl" />
      </div>
    </div>
  );
};

export default Header;
