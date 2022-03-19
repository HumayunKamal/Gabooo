import { Fragment } from "react";
import TopNav from "../Components/TopNav/TopNav";
import Navbar from "../Components/NavBar/Navbar";
import Header from "../Components/Header/Header";
import BottomNavBar from "../Components/BottomNavBar/BottomNavBar";
import PopularNow from "../Components/PopularNow/PopularNow";
import WinterCollection from "../Components/WinterCollection/WinterCollection";
import DiscountBanner from "../Components/DiscountBanner/DiscountBanner";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import OurCollection from "../Components/OurCollection/OurCollection";
import StoryBehind from "../Components/StoryBehind/StoryBehind";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <TopNav />
      <Navbar />
      <Header />
      <BottomNavBar />
      <PopularNow />
      <WinterCollection />
      <DiscountBanner />
      <NewsLetter />
      <OurCollection />
      <StoryBehind />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
