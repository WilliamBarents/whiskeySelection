import React from "react";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes["banner"]}>
      <p className={classes["banner-text"]}>
        <i>Whiskey Selection</i>
      </p>
    </div>
  );
};

export default Banner;
