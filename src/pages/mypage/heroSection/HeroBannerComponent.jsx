import React from "react";

const HeroBannerComponent = ({ title, description, onClick }) => (
  <div className="HeroBanner" onClick={onClick}>
    <div className="BannerContent">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="GoBtn">바로가기</button>
    </div>
    <div className="BannerGraphic"></div>
  </div>
);

export default HeroBannerComponent;