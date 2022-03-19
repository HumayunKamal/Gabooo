import { Link } from "react-router-dom";
import classes from "./CardSquare.module.scss";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.cardClass} `}>
      <div className={classes.cardHeader}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={classes.cardFooter}>
        <Link to={`/${props.id}`}>{props.name}</Link>
        <p>$ {props.price}</p>
      </div>
    </div>
  );
};

export default Card;
