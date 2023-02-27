import React from "react";
import "./Item.css";
import BackgroundSvg from "./card-bg.svg";

const Item = ({
  title,
  image,
  alt,
  region,
  cost,
  tasting_notes,
  uri,
  classContainer,
}) => {
  return (
    <a
      href={`https://www.google.com/search?q=${uri}`}
      rel="noreferrer"
      target="_blank"
      className="related"
    >
      <div className="item">
        <div className="item-info">
          <span className={`firstLetter item-title`}>{title}</span>
          <span className="firstLetter item-region">{region} Region</span>
          <span className="item-cost  item-title">${cost}</span>
          <div className={`notes-container ${classContainer}`}>
            {tasting_notes}
          </div>
        </div>
        <img className="item-image" src={`${image}`} alt={alt} />
        <img
          className="item-background"
          src={BackgroundSvg}
          alt="SVG Background"
        />
        <div className={`decorative-tab ${classContainer}`}></div>
      </div>
    </a>
  );
};

export default Item;
