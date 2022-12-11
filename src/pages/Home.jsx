import React from "react";
import Banner from "../components/Banner";
import BannerImg from "../assets/bannerHome.svg"


const Home = () => {
  return (
    <div className="home">
      <Banner image={BannerImg} alt={"bannière de l'image cote de mer"} text={"Chez vous, partout et ailleurs"} />
    </div>
  )
};

export default Home;
