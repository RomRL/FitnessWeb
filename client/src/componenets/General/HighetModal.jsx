import React, { useState } from 'react';
import { updateHeight } from '../../controller/requests';
import {
  MDBBtn,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBContainer,
  MDBValidation,
  MDBValidationItem,
} from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';

export default function HeightModal({ setHeight }) {
  const [showModal, setShowModal] = useState(false);
  const [editHeight, setEditHeight] = useState('');

  const changeHeight = () => {
    if (editHeight >= 0 && editHeight <= 210) {
      const response = updateHeight(editHeight);
      if (response === false) {
        alert('Error');
      } else {
        setHeight(editHeight);
        setShowModal(false);
      }
    } else {
      alert('Please choose a height between 40 and 210.');
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MDBBtn color="danger" onClick={toggleModal}>
        Edit Height
      </MDBBtn>

      <Modal show={showModal} tabIndex="-1">
        <MDBModalHeader className="bg-dark text-white">
          <MDBModalTitle>Set Height</MDBModalTitle>
          <MDBBtn
            color="none"
            className="btn-close btn-close-white"
            onClick={toggleModal}
          ></MDBBtn>
        </MDBModalHeader>
        <MDBContainer onSubmit={changeHeight} >

        <MDBModalBody>
            <MDBValidation className="row g-3"  >
                <div className="col-9">
                  <p>Insert your new height</p>
                </div>
                <MDBValidationItem feedback='Enter Weight (Min 40 kg Max 250 kg )' invalid className="col-md-4">
                <MDBInput
                  value={editHeight}
                  name="Height"
                  onChange={(event) => setEditHeight(event.target.value)}
                  id="Height"
                  required
                  label="Height"
                  type="number"
                  min={50}
                  max={210}
                  size="lg"
                  wrapperClass="mb-4"
                  labelClass="text-black"
                  style={{ color: 'black' }}
                />
              </MDBValidationItem>
            </MDBValidation>
        </MDBModalBody>


        <MDBModalFooter>
          <MDBBtn color="success" type='submit'>
            Change Height
          </MDBBtn>
          <MDBBtn color="danger" onClick={toggleModal}>
            Close
          </MDBBtn>
          
        </MDBModalFooter>
        </MDBContainer>

      </Modal>
    </>
  );
}
