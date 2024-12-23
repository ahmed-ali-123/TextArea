import React from "react";
import "./home.css";
import Bottombar from "@/components/bottombar/bottombar";
import Cards from "@/components/cards/cards";
import Icon from "@/components/hamburger/hamburger";
const Home = () => {
  return (
    <div className="home">
      <h3 className="mainheading">
        <Icon type="open" /> For You :{" "}
      </h3>
      <Cards page="foryou" />
      <Bottombar page="foryou" />
    </div>
  );
};

export default Home;
