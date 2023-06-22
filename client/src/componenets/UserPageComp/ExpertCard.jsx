import React from "react";
import BigCard from "./BigCard";
import getURL from "../../assets/assetsUrls";

export default function ExpertCard(props) {
  const { data } = props;
  console.log("--",data);
  //  Format the string to be displayed in the card
  
  const averageWeightLossPerDay = Object.entries(data.averageWeightLossPerDay).map(([key, value]) => {
    if (value > 0)
      return (`$${key}  You gained ${value.toFixed(1)} kg$`);

    else
      return `$${key}  You Lost ${-1 * value.toFixed(1)} kg$`;
  }).join(" ");

  return (
    <BigCard title="General information"
    text={
          // Cheack if data.averageWeightLossPerDay is empty
       (data.min === "" &&  data.max === "")
          ? "You need to work one more time to see the data"
          : `#Average Weight Loss Per Day $${averageWeightLossPerDay}$ #   #Gained The Most Weight $${data.min} #Lost The Most Weight $${data.max}$`
      }
      img_src={getURL("general-info")}></BigCard>
  );
}
