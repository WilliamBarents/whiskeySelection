import React from "react";
import classes from "./FooterBanner.module.css";

const ARTICLE_BANNER = [
  {
    title: "The Best Whiskies from Scotland",
    teaser:
      "Ever wanted to get into scotch but don't know where to start? We've reviewed some of the most popular whiskies and break them down by their tasting notes.",
    img: "whiskey-glass.jpg",
    url: "http://www.origin.scot/article",
  },
];

const FooterBanner = () => {
  return (
    <div className={classes["footer-container"]}>
      {ARTICLE_BANNER.map((item) => (
        <div className={classes["footer"]} key={`${item.title}`}>
          <a href={item.url} target="_blank" rel="noreferrer">
            <div
              className={classes["footer-banner"]}
              style={{
                backgroundImage: `url('./${item.img}')`,
              }}
            ></div>
            <div className={classes["banner-text"]}>
              <p className={classes["banner-text__title"]}>
                <i>{item.title}</i>
              </p>
              <p className={classes["banner-text__teaser"]}>{item.teaser}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FooterBanner;
