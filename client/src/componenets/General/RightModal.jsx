import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
    MDBInput,
    MDBValidationItem,
} from 'mdb-react-ui-kit';
import { Modal } from "react-bootstrap";
import { updateHeight } from '../../controller/requests';

export default function RightModal(props) {
  const {height,setHeight} = props;
  const [topRightModal, setTopRightModal] = useState(false);

const changeHeight = () => {
    setHeight(height);
    const response = updateHeight(height);
    if (response === false) {
        alert("error");
    }
    setTopRightModal(false);
    };

  const toggleShow = () => {
    setTopRightModal(!topRightModal);
  };
  return (
    <>
      <MDBBtn onClick={toggleShow}>Top right</MDBBtn>

      <Modal
        animationDirection='right'
        show={topRightModal}
        tabIndex='-1'
        setShow={setTopRightModal}
      >
        <MDBModalDialog position='top-right' side>
          <MDBModalContent>
            <MDBModalHeader className='bg-info text-white'>
              <MDBModalTitle>Set Height</MDBModalTitle>
              <MDBBtn
                color='none'
                className='btn-close btn-close-white'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                {/* enter height and send to server requst */}
                
                <div className='col-9'>
                  <p>Set Height</p>
                </div>
                <MDBValidationItem
                        feedback="Choose height between 0-210"
                        invalid>
                        <MDBInput
                          value={height}
                          name="Height"
                          onChange={(event) => setHeight(event.target.value)  }
                          id="Height"
                          required
                          label="Height"
                          type="number"
                          min={50}
                          max={210}
                          size="lg"
                          wrapperClass="mb-4"
                          labelClass="text-black"
                          style={{ color: "black" }}
                        />
                      </MDBValidationItem>                {/* enter weight and send to server requst */}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='info' onClick={changeHeight} >Go to the cart  </MDBBtn>
              <MDBBtn outline color='info' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </Modal>
    </>
  );
}