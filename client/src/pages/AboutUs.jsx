import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import AboutUsCard from "../componenets/AboutUsComp/AboutCard.jsx";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import AboutGeneral from "../componenets/AboutUsComp/AboutGeneral.jsx";
import getURL from "../assets/assetsUrls.js";
//Home page component that is used to display the home page of the website
//Includes the jumbotron and the main section of the home page
function AboutUs() {
  return (
    <MainLayout>
      <MDBContainer fluid>
        {/* Main Navigation */}
          {/* Intro Section */}
          <div
            className="jarallax"
            data-jarallax='{"speed": 0.2}'
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/img%20%2853%29.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              width: "100%",
            }}
          ></div>

        {/* Team Section */}
        <section className="text-center py-5">
          <MDBContainer>
            <AboutGeneral></AboutGeneral>
            <MDBRow>
              <AboutUsCard
                git={getURL("romGit")}
                name={"Rom Harel"}
                number={"972547575612"}
                linkdin={getURL("romLinkDin")}
                img={getURL("rom")}
              / >
              <AboutUsCard
                git={getURL("danielGit")}
                name={"Daniel Maman"}
                number={"972503809280"}
                linkdin={getURL("danielLinkDin")}
                img={getURL("daniel")}
              / >
                
              
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBContainer>
    </MainLayout>
  );
}
export default AboutUs;
