import React from "react";
import { MDBBtn, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
//Footer component that is used in many pages and components includes links to whatsapp and github and our company name
function AboutUsCard(props) {
    //                 <AboutUsCard name={"Rom Harel"} number={"97254757561"} img={""} sometext={"Some text that describes me lorem ipsum ipsum lorem" } email={"romharel98@gmail.com"} git={"url"} />     

    const { name, number, img, sometext, linkdin, git } = props;
    console.log(props);
    console.log(img);
    return (
        <MDBCol>
        <div className="avatar mx-auto">
          <img
            src={img}
            className="rounded-circle z-depth-1 img-fluid"
            alt="Sample avatar"
            width={300}
          />
        </div>
        <MDBRow>
        <h4 className="font-weight-bold dark-grey-text my-4">{name}</h4>
        <h6 className="text-uppercase grey-text mb-3">
          <strong>Full Stack Developer</strong>
        </h6>
        
        </MDBRow>
        <ul className="list-unstyled"> 
        <MDBBtn
        floating
        className="m-1 card "
        style={{ backgroundColor: "#333333" }}
        href={git}
      >
        <MDBIcon fab icon="github" />
      </MDBBtn>
      <MDBBtn
        floating
        className="m-1 card"
        style={{ backgroundColor: "#25d366" }}
        href={`https://api.whatsapp.com/send?phone=${number}`}
        >
        <MDBIcon fab icon="whatsapp" />
      </MDBBtn>
      <MDBBtn
        floating
        className="m-1 card"
        style={{ backgroundColor: '#0082ca' }}
        href={linkdin}
        >
            <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>
        </ul>
        </MDBCol>  
          );
}
export default AboutUsCard;