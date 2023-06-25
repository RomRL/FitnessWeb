import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import AboutUsCard from "./AboutCard.jsx";
import getURL from "../../assets/assetsUrls.js";

function AboutUsOurTeam() {
  return (
    <MDBContainer className="text-center">
      <hr />
      <h1 className="h1 pt-5 pb-3">OUR TEAM</h1>
      <p className="px-2 mb-5 pb-3 lead blue-grey-text">
        This project was created by Rom Harel and Daniel Maman as part of a final project in the course "Web Development" at the BRAUDE college.
      </p>
      <MDBRow >
        <AboutUsCard
          git={getURL("romGit")}
          name={"Rom Harel"}
          number={"972547575612"}
          linkdin={getURL("romLinkDin")}
          img={getURL("rom")}
        />
        <AboutUsCard
          className='fade'
          git={getURL("danielGit")}
          name={"Daniel Maman"}
          number={"972503809280"}
          linkdin={getURL("danielLinkDin")}
          img={getURL("daniel")}
        />
      </MDBRow>

    </MDBContainer>
  );
}
export default AboutUsOurTeam