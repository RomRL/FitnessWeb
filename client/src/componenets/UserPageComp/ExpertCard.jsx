import React from "react";
import ExpertTable from "./ExpertTable";
import { MDBCard, MDBCol, MDBCardBody } from "mdb-react-ui-kit";
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

    <MDBCol >
      <MDBCard >
        <MDBCardBody>
          <div className="table-responsive">
            <ExpertTable data={data} />
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


  );
}
