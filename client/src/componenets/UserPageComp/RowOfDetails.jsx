import React from "react";
import { MDBCardText, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function RowOfDetails(props) {
  const { type, value } = props;
  return (
    <>
        

      <MDBRow>
        <MDBCol >
          <MDBCardText className="fw-bolder">{type}</MDBCardText>
        </MDBCol>
        <MDBCol >
          <MDBCardText className="text-muted text-center fst-italic">{value}</MDBCardText>
        </MDBCol>
      </MDBRow>
     <hr className="w-40 " />
    </>
  );
}
