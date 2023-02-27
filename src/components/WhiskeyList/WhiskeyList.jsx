import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./WhiskeyList.css";
import { Box } from "@mui/material";
import Item from "../Item/Item";

const WHISKEY_LIST = [
  {
    title: "glenmorangie",
    image: "glenmorangie.png",
    cost: 36,
    region: "highlands",
    tasting_notes: ["citrus", "vanilla", "orange"],
    uri: "/glenmorangie",
  },
  {
    title: "Auchentoshan",
    image: "auchentoshan.png",
    cost: 25,
    region: "lowlands",
    tasting_notes: ["honey", "citrus", "nuttines"],
    uri: "/auchentoshan",
  },
  {
    title: "ardbeg",
    image: "ardbeg.png",
    cost: 32,
    region: "islay",
    tasting_notes: ["chocolate", "cinnamon"],
    uri: "/ardbeg",
  },
  {
    title: "lagavulin",
    image: "lagavulin.png",
    cost: 157,
    region: "islay",
    tasting_notes: ["wood", "seaweed"],
    uri: "/lagavulin",
  },
  {
    title: "Bruichladdich",
    image: "bruichladdich.png",
    cost: 32,
    region: "islay",
    tasting_notes: ["barley", "fruit"],
    uri: "/bruichladdich",
  },
  {
    title: "talisker",
    image: "talisker.png",
    cost: 6,
    region: "islands",
    tasting_notes: ["berries", "smoke"],
    uri: "/talisker",
  },
  {
    title: "macallan",
    image: "macallan.png",
    cost: 65,
    region: "speyside",
    tasting_notes: ["vanilla"],
    uri: "/macallan",
  },
  {
    title: "Glenlivet",
    image: "glenlivet.png",
    cost: 36,
    region: "speyside",
    tasting_notes: ["buttery", "almond", "spice"],
    uri: "/glenlivet",
  },
  {
    title: "Springbank",
    image: "springbank.png",
    cost: 12,
    region: "campbeltown",
    tasting_notes: ["chestnut", "citrus"],
    uri: "/springbank",
  },
];

const WhiskeyList = () => {
  const [value, setValue] = useState("all");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="whiskey-list">
      <div className="tabs">
        <div
          className={value === "all" ? "tab active" : "tab"}
          onClick={() => handleChange("all")}
        >
          All
        </div>
        <div
          className={value === "campbeltown" ? "tab active" : "tab"}
          onClick={() => handleChange("campbeltown")}
        >
          Campbeltown
        </div>
        <div
          className={value === "highlands" ? "tab active" : "tab"}
          onClick={() => handleChange("highlands")}
        >
          Highlands
        </div>
        <div
          className={value === "islands" ? "tab active" : "tab"}
          onClick={() => handleChange("islands")}
        >
          Islands
        </div>
        <div
          className={value === "islay" ? "tab active" : "tab"}
          onClick={() => handleChange("islay")}
        >
          Islay
        </div>
        <div
          className={value === "lowlands" ? "tab active" : "tab"}
          onClick={() => handleChange("lowlands")}
        >
          Lowlands
        </div>
        <div
          className={value === "speyside" ? "tab active" : "tab"}
          onClick={() => handleChange("speyside")}
        >
          Speyside
        </div>
      </div>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        justifyContent="space-around"
        rowGap="80px"
        columnGap="80px"
      >
        {value === "all" &&
          WHISKEY_LIST.map((item) => (
            <Item
              uri={item.uri}
              title={item.title}
              key={`${item.title}-${item.region}`}
              cost={item.cost}
              region={item.region}
              tasting_notes={item.tasting_notes.map((notes) => (
                <p className="firstLetter item-notes">{notes}</p>
              ))}
              classContainer={item.region}
              image={item.image}
              alt={item.title}
            />
          ))}

        {value === "campbeltown" &&
          WHISKEY_LIST.filter((item) => item.region === "campbeltown").map(
            (item) => (
              <Item
                uri={item.uri}
                title={item.title}
                key={`${item.title}-${item.region}`}
                cost={item.cost}
                region={item.region}
                tasting_notes={item.tasting_notes.map((notes) => (
                  <p className="firstLetter item-notes">{notes}</p>
                ))}
                classContainer={item.region}
                image={item.image}
                alt={item.title}
              />
            )
          )}

        {value === "highlands" &&
          WHISKEY_LIST.filter((item) => item.region === "highlands").map(
            (item) => (
              <Item
                uri={item.uri}
                title={item.title}
                key={`${item.title}-${item.region}`}
                cost={item.cost}
                region={item.region}
                tasting_notes={item.tasting_notes.map((notes) => (
                  <p className="firstLetter item-notes">{notes}</p>
                ))}
                classContainer={item.region}
                image={item.image}
                alt={item.title}
              />
            )
          )}

        {value === "islands" &&
          WHISKEY_LIST.filter((item) => item.region === "islands").map(
            (item) => (
              <Item
                uri={item.uri}
                title={item.title}
                key={`${item.title}-${item.region}`}
                cost={item.cost}
                region={item.region}
                tasting_notes={item.tasting_notes.map((notes) => (
                  <p className="firstLetter item-notes">{notes}</p>
                ))}
                classContainer={item.region}
                image={item.image}
                alt={item.title}
              />
            )
          )}

        {value === "islay" &&
          WHISKEY_LIST.filter((item) => item.region === "islay").map((item) => (
            <Item
              uri={item.uri}
              title={item.title}
              key={`${item.title}-${item.region}`}
              cost={item.cost}
              region={item.region}
              tasting_notes={item.tasting_notes.map((notes) => (
                <p className="firstLetter item-notes">{notes}</p>
              ))}
              classContainer={item.region}
              image={item.image}
              alt={item.title}
            />
          ))}

        {value === "lowlands" &&
          WHISKEY_LIST.filter((item) => item.region === "lowlands").map(
            (item) => (
              <Item
                uri={item.uri}
                title={item.title}
                key={`${item.title}-${item.region}`}
                cost={item.cost}
                region={item.region}
                tasting_notes={item.tasting_notes.map((notes) => (
                  <p className="firstLetter item-notes">{notes}</p>
                ))}
                classContainer={item.region}
                image={item.image}
                alt={item.title}
              />
            )
          )}

        {value === "speyside" &&
          WHISKEY_LIST.filter((item) => item.region === "speyside").map(
            (item) => (
              <Item
                uri={item.uri}
                title={item.title}
                key={`${item.title}-${item.region}`}
                cost={item.cost}
                region={item.region}
                tasting_notes={item.tasting_notes.map((notes) => (
                  <p className="firstLetter item-notes">{notes}</p>
                ))}
                classContainer={item.region}
                image={item.image}
                alt={item.title}
              />
            )
          )}
      </Box>
    </div>
  );
};

export default WhiskeyList;
