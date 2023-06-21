import React from "react";
import { MDBRow,MDBCol } from "mdb-react-ui-kit";
import InformativeModal from "./InformativeModal";

export default function HelpAndTitle(props) {
    const { button_name, headline, body,title } = props;

  return (
    <>
          <br/>
          
            <MDBRow className='mb-3'>
              <MDBCol className="col-md-10">
              <h3 className="fw-bolder  mt-4">{title}</h3>
              </MDBCol>
              <MDBCol>
                <InformativeModal   
                button_name={button_name}
                headline={headline}
                body={body}></InformativeModal>        
              </MDBCol>
            </MDBRow>
            <div className="d-flex justify-content-xl-evenly">
            </div>
         
    </>
  );
}
