import React from "react";
import ExpertTable from "./ExpertTable";
import { MDBCard, MDBCol,MDBCardBody,MDBCardText } from "mdb-react-ui-kit";
export default function ExpertCard(props) {
  const { data } = props;
  //  Format the string to be displayed in the card
  
  const averageWeightLossPerDay = Object.entries(data.averageWeightLossPerDay).map(([key, value]) => {
    if (value > 0)
      return (`$${key}  You gained ${value.toFixed(1)} kg$`);

    else
      return `$${key}  You Lost ${-1 * value.toFixed(1)} kg$`;
  }).join(" ");

  return (
  
    <MDBCol  md='8'>
    <MDBCard >
        <MDBCardBody>
        <MDBCardText>
            <ExpertTable data={data} />
          </MDBCardText>  
    </MDBCardBody>
    </MDBCard>
  </MDBCol>
    // <BigCard title="General information"
    // text={
    //       // Cheack if data.averageWeightLossPerDay is empty
    //    (data.min === "" &&  data.max === "")
    //       ? "You need to work one more time to see the data"
    //       : `#Average Weight Loss Per Day $${averageWeightLossPerDay}$ #   #Gained The Most Weight $${data.min} #Lost The Most Weight $${data.max}$`
    //   }
    //   img_src={getURL("general-info")}>
        

    //      </BigCard>

  );
}
