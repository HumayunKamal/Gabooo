import { Link } from "react-router-dom";
// Style
import style from "./TopNav.module.scss";

// JSX
const TopNav = () => {
  return (
    <div className={style.main}>
      <div className={style.inline}>
        <a href="mailto:gabooo@mail.com">gabooo@mail.com</a>
        <a href="tel:+12 345-678-90">+12 345-678-90</a>
      </div>
      <div className={style.inlineSocial}>
        <a href="facebook.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="12px">
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M1.175,11.624 L3.480,11.624 L3.480,6.100 L5.35,6.100 L5.238,4.148 L3.480,4.148 L3.480,3.0 C3.480,2.571 3.767,2.470 3.970,2.470 L5.208,2.470 L5.208,0.574 L3.501,0.568 C1.607,0.568 1.175,1.982 1.175,2.886 L1.175,4.148 L0.79,4.148 L0.79,6.100 L1.175,6.100 L1.175,11.624 Z"
            />
          </svg>
        </a>
        <a href="twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="10px">
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M0.589,7.998 C1.595,8.641 2.790,9.16 4.78,9.16 C8.265,9.16 10.556,5.561 10.556,2.562 C10.556,2.465 10.554,2.366 10.548,2.269 C10.995,1.949 11.380,1.550 11.685,1.95 C11.277,1.277 10.837,1.398 10.376,1.451 C10.849,1.173 11.206,0.726 11.378,0.198 C10.939,0.457 10.451,0.645 9.933,0.748 C9.519,0.307 8.925,0.32 8.271,0.32 C7.13,0.32 5.996,1.48 5.996,2.299 C5.996,2.477 6.15,2.649 6.52,2.816 C4.162,2.721 2.482,1.820 1.361,0.447 C1.165,0.783 1.52,1.171 1.52,1.587 C1.52,2.374 1.455,3.68 2.66,3.475 C1.691,3.465 1.341,3.362 1.33,3.192 L1.33,3.219 C1.33,4.319 1.820,5.236 2.861,5.444 C2.669,5.497 2.468,5.523 2.259,5.523 C2.113,5.523 1.970,5.510 1.831,5.483 C2.122,6.385 2.962,7.41 3.958,7.58 C3.179,7.666 2.199,8.28 1.130,8.28 C0.947,8.28 0.767,8.19 0.589,7.998 Z"
            />
          </svg>
        </a>
        <Link to="/login" color="white" underline="none">
          Login
        </Link>
        <Link to="/register" color="white" underline="none">
          Register
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
