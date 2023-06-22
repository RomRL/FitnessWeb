import React from "react";
import {
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import RowOfDetails from "./RowOfDetails";
import HighetModal from "../General/HighetModal";

export default function DetailsCard(props) {
  const { user, training ,height,setHeight,color } = props;
  return (
      <MDBCard className=" h-100">
        <MDBCardBody>
          <RowOfDetails type="Full Name" value={user.firstName + " " + user.lastName} color = "grey"/>
          <RowOfDetails type="Email" value={user.email} color = "grey"/>
          <RowOfDetails type="Weight" value={`${user.weight} kg`} color = "grey"/>
          <RowOfDetails type="Height" value={`${height} cm`} color = "grey" />
        <RowOfDetails type="BMI" value={user.bmi} color={color} />
          {training ? (
            <RowOfDetails type="Current Program" value={training} color = "grey"/>
          ) : (
            <RowOfDetails type="Current Program" value="choose one program" />
          )}
          <div className="d-flex justify-content-center">
          <HighetModal  height={height} setHeight={setHeight} ></HighetModal>
          </div>
        </MDBCardBody>
      </MDBCard>
  );
}
