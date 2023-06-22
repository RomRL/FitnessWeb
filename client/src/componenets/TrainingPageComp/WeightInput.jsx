import { React, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBBtnGroup,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function WeightInput(props) {
  const [newWeight, setNewWeight] = useState();
  const { addTrainingProgram } = props;


  const handleSubmit = (event) => {
    event.preventDefault();
      addTrainingProgram(newWeight);
  };


  return (
       <MDBContainer onSubmit={handleSubmit} >
        <MDBValidation className="row g-3"  >
          <MDBValidationItem feedback='Enter Weight (Min 40 kg Max 250 kg )' invalid className="col-md-4">
          <MDBInput
            label="Enter new weight"
              type="number"
              className="form-control input-primary"
              required
              id="newWeight"
              min="40"
              max="250"
              value={newWeight}
              onChange={(event) => setNewWeight(event.target.value)}
            />
          </MDBValidationItem>

          <div className="d-flex mt-3">
            <MDBBtnGroup aria-label="Basic example">
              <MDBBtn type="submit" color="success" >
                Submit
              </MDBBtn>

            </MDBBtnGroup>
          </div>
        </MDBValidation>
      </MDBContainer>
    
  );
}
