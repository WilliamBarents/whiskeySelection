import React from "react";
import Banner from "./Banner/Banner";
import FooterBanner from "./FooterBanner/FooterBanner";
import WhiskeyList from "./WhiskeyList/WhiskeyList";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhiskeyList />
      <FooterBanner />
    </div>
  );
};

export default Home;
