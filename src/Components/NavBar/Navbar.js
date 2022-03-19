import { Link } from "@mui/material";
import classes from "./Navbar.module.scss";
const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <Link href="/women">Women</Link>
      <Link href="/men">Men</Link>
      <Link href="/children">Childen</Link>
      <Link href="/collection">Collection</Link>
      <Link href="/" className={classes.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="117"
          height="39"
          viewBox="0 0 117 39"
        >
          <g id="Logo" transform="translate(-10791.706 -5021.553)">
            <path
              id="Path_9"
              data-name="Path 9"
              d="M10810.155,5044.635a3.9,3.9,0,0,0,3.018-1.344,2.755,2.755,0,0,1-.821,2.212,3.332,3.332,0,0,1-2.23.7,4.375,4.375,0,0,1-2.675-.953l-.992,1.923a5.985,5.985,0,0,0,1.872.944,7.056,7.056,0,0,0,2.094.332,5.231,5.231,0,0,0,3.35-1.123,3.766,3.766,0,0,0,1.146-1.5,5.279,5.279,0,0,0,.427-2.178v-7.979h-2.562v1.208a3.344,3.344,0,0,0-2.719-1.345,3.968,3.968,0,0,0-2.913,1.3,4.567,4.567,0,0,0-1.273,3.334,4.345,4.345,0,0,0,1.239,3.249A4.171,4.171,0,0,0,10810.155,5044.635Zm-1.042-6.295a2.182,2.182,0,0,1,1.563-.629,2.042,2.042,0,0,1,1.521.629,2.366,2.366,0,0,1,.616,1.727,2.487,2.487,0,0,1-.616,1.76,2.007,2.007,0,0,1-1.537.664,2.078,2.078,0,0,1-1.564-.672,2.443,2.443,0,0,1-.641-1.761A2.263,2.263,0,0,1,10809.113,5038.34Zm16.63,1.578a4.926,4.926,0,0,0-2.8.7,2.369,2.369,0,0,0-1.026,2.1,2.8,2.8,0,0,0,.991,2.246,3.654,3.654,0,0,0,2.453.842,3.021,3.021,0,0,0,2.452-1.241v1.1h2.41v-5.836a3.148,3.148,0,0,0-1.06-2.637,4.3,4.3,0,0,0-2.734-.834,6.871,6.871,0,0,0-4.136,1.311l1.145,1.649a4.567,4.567,0,0,1,1.257-.655,4.2,4.2,0,0,1,1.409-.264q1.556,0,1.555,1.463v.052Zm1.9,2.262a1.356,1.356,0,0,1-.521,1.115,1.878,1.878,0,0,1-1.205.417,1.784,1.784,0,0,1-1.052-.264.874.874,0,0,1-.367-.757q0-.953,1.538-.953h1.606Zm11.928,2.28a3.331,3.331,0,0,0,2.71,1.344,3.9,3.9,0,0,0,2.914-1.378,4.835,4.835,0,0,0,1.28-3.42,4.629,4.629,0,0,0-1.248-3.342,3.919,3.919,0,0,0-2.92-1.3,3.52,3.52,0,0,0-2.736,1.174v-4.491H10837v12.624h2.564Zm.59-5.215a1.927,1.927,0,0,1,1.529-.74,1.994,1.994,0,0,1,1.556.749,2.731,2.731,0,0,1,.649,1.854,2.532,2.532,0,0,1-.667,1.812,2.075,2.075,0,0,1-1.555.707,1.946,1.946,0,0,1-1.513-.707,2.645,2.645,0,0,1-.624-1.82A2.778,2.778,0,0,1,10840.158,5039.246ZM10858,5045.8a4.762,4.762,0,0,0,3.479-1.36,4.761,4.761,0,0,0,0-6.711,5.1,5.1,0,0,0-6.957,0,4.765,4.765,0,0,0,0,6.711A4.765,4.765,0,0,0,10858,5045.8Zm-1.639-6.55a2.238,2.238,0,0,1,3.279,0,2.645,2.645,0,0,1,.642,1.837,2.613,2.613,0,0,1-.642,1.829,2.255,2.255,0,0,1-3.279,0,2.609,2.609,0,0,1-.643-1.829A2.641,2.641,0,0,1,10856.366,5039.254Zm17.928,6.55a4.759,4.759,0,0,0,3.479-1.36,4.758,4.758,0,0,0,0-6.711,5.1,5.1,0,0,0-6.955,0,4.756,4.756,0,0,0,0,6.711A4.754,4.754,0,0,0,10874.294,5045.8Zm-1.641-6.55a2.241,2.241,0,0,1,3.282,0,2.644,2.644,0,0,1,.64,1.837,2.612,2.612,0,0,1-.64,1.829,2.258,2.258,0,0,1-3.282,0,2.613,2.613,0,0,1-.642-1.829A2.645,2.645,0,0,1,10872.653,5039.254Zm17.931,6.55a4.756,4.756,0,0,0,3.477-1.36,4.758,4.758,0,0,0,0-6.711,5.1,5.1,0,0,0-6.955,0,4.756,4.756,0,0,0,0,6.711A4.756,4.756,0,0,0,10890.584,5045.8Zm-1.643-6.55a2.241,2.241,0,0,1,3.282,0,2.645,2.645,0,0,1,.642,1.837,2.613,2.613,0,0,1-.642,1.829,2.258,2.258,0,0,1-3.282,0,2.621,2.621,0,0,1-.639-1.829A2.652,2.652,0,0,1,10888.941,5039.254Zm-97.235-17.7v39h117v-39Zm114.336,36.347h-111.671v-33.693h111.671Z"
              fill="#2a2a2a"
            />
          </g>
        </svg>
      </Link>
      <Link href="/spring">Spring</Link>
      <Link href="/summar">Summar</Link>
      <Link href="/fall">Fall</Link>
      <Link href="/winter">Winter</Link>
    </div>
  );
};

export default Navbar;
