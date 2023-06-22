import React from "react";
import ExpertTable from "./ExpertTable";
import { MDBCard, MDBCol, MDBCardBody } from "mdb-react-ui-kit";
export default function ExpertCard(props) {
  const { data } = props;
  //  Format the string to be displayed in the card

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
