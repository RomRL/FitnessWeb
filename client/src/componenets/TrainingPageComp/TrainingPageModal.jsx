import React from "react";
import {  useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const TrainingModal = ({ showModal, setShowModal, modalOption }) => {
  const navigate = useNavigate();
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header>
        <Modal.Title>Add Training Program</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Three Options to Show */}
        {modalOption === "emptyInput" && <p>Please enter valid weight value.</p>}
        {modalOption === "error" && (
          <p>Error occurred while adding the training program.</p>
        )}
        {modalOption === "success" && (
          <p>Training program added successfully.</p>
        )}
      </Modal.Body>
      <Modal.Footer>  
        {modalOption === "success" && (
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              navigate("/userpage");
            }}
          >
            lets see your progress
          </Button>
        )}
        {modalOption === "error" && (
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </Button>
        )}
        {modalOption === "emptyInput" && (
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default TrainingModal;
