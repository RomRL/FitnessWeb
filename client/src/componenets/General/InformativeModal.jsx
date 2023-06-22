import React, { useState } from "react";
import {
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import InstructionsFormatter from "../TrainingPageComp/InstructionsFormatter";
import Modal from "react-bootstrap/Modal";

export default function InformativeModal(props) {
  const { button_name, headline, body } = props;
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);


  return (
    <>
      <MDBBtn  rounded type="submit" color="info" onClick={toggleShow}>
        {button_name}
      </MDBBtn>
      <Modal show={optSmModal} tabIndex="-1" onHide={toggleShow}>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <strong>  {headline}</strong></MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <InstructionsFormatter text={body}></InstructionsFormatter>

            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </Modal>
    </>
  );
}
