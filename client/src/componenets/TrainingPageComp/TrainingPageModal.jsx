import React from "react";
import { Modal, Button } from "react-bootstrap";

const TrainingModal = ({ showModal, setShowModal, modalOption }) => {
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
        <Button variant="primary" onClick={() => window.location.reload()}> 
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrainingModal;
