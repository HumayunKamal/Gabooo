import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

function Button(props) {
  return (
    <button className={classes.button}>
      {props.to && <Link to={`${props.to}`}>{props.children}</Link>}
      {props.href && <a href={props.href}>{props.children}</a>}
    </button>
  );
}

export default Button;
