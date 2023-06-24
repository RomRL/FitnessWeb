import React from "react";
import Footer from "../General/Footer.jsx";
import ProfilePicture from "../UserHomePageComp/ProfilePicture.jsx";
import GraphComponent from "../UserHomePageComp/WeightsPerDateGraph.jsx";
import DayesPerProgramGraph from "../UserHomePageComp/DayesPerProgramGraph.jsx";
import ChartTrainigGraph from "../UserHomePageComp/UsagePercentageOfProgramsGraph.jsx";
import DetailsCard from "../UserHomePageComp/DetailsCard.jsx";
import BigCard from "../UserHomePageComp/BigCard.jsx";
import getURL from "..//..//assets/assetsUrls.js";
import ExpertCard from "../UserHomePageComp/ExpertCard.jsx";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
} from "mdb-react-ui-kit";


function UserHomePageForm({ data, user,  height, setHeight, fetchUser }) {
    return (
        <section style={{ backgroundColor: "transpert" }}>
            <MDBContainer className="py-4">
                <MDBRow className="py-2 g-4">
                    {/* Profile Picture Cube */}
                    <ProfilePicture user={user} />
                    <MDBCol md="9">
                        {/* User Details Card  */}

                        <DetailsCard
                            user={user}
                            height={height}
                            setHeight={setHeight}
                            training={data.currentTraining}
                            color={data.normalWeight.color}
                            fetchUser={fetchUser}
                        />
                        {/* Include Max and Min Weight */}
                    </MDBCol>
                </MDBRow>

                <MDBRow className="py-4 g-4">
                    <BigCard
                        title="Weight Statistics"
                        // set text to be 'You need to work one more time to see the data' if weights is empty else set it to the data
                        text={
                            data.weights.length === 0
                                ? "You need to work one more time to see the data"
                                : `#Max Weight $${data.max.toFixed(
                                    2
                                )} kg$  \n #Min Weight $${data.min.toFixed(
                                    2
                                )} kg$ \n #Average Weight $${data.average
                                } kg$ \n #Weight Loss $${data.weightLoss}$ \n`
                        }
                        img_src={getURL("weight")}
                    />
                    <BigCard
                        title="Bmi Statistics"
                        text={
                            data.weights.length === 0
                                ? "You need to work one more time to see the data"
                                : data.normalWeight.message
                        }
                        img_src={getURL("statistics")}
                        picture="https://nutrition.health.gov.lk/wp-content/uploads/2020/12/BMI-1024x569.png"
                        fillPicture={true}
                    />
                    <BigCard
                        title="Popular Training"
                        text={
                            data.weights.length === 0
                                ? "You need to work one more time to see the data"
                                : `$${data.popularName}$  #Current Training $${data.currentTraining}$  #Weight Loss Per Program ${data.weightLossPerProgram} \n `
                        }
                        img_src={getURL("workout")}
                    />
                </MDBRow>

                <MDBRow className=" row-cols-md-2 g-4 py-4">
                    <MDBCol md="4">
                        <MDBCard className="h-100">
                            <MDBCardHeader className="fw-bolder text-center">
                                Usage percentage of programs
                            </MDBCardHeader>
                            <MDBCardBody>
                                {data.weights.length === 0 ? (
                                    <p>You need to work one more time to see the data</p>
                                ) : (
                                    <ChartTrainigGraph
                                        selectedTrainings={user.selectedTrainings}
                                    />
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <ExpertCard data={data.averageWeightLossPerProgram} />
                </MDBRow>

                <MDBRow className="py-4 g-4">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardHeader className="fw-bolder text-center">
                                Weights Per Training
                            </MDBCardHeader>
                            <MDBCardBody>
                                {data.weights.length === 0 ? (
                                    <p>You need to work one more time to see the data</p>
                                ) : (
                                    <GraphComponent
                                        selectedTrainings={user.selectedTrainings}
                                    />
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardHeader className="fw-bolder text-center">
                                Total Days Per Program
                            </MDBCardHeader>
                            <MDBCardBody>
                                {data.weights.length === 0 ? (
                                    <p>You need to work one more time to see the data</p>
                                ) : (
                                    <DayesPerProgramGraph
                                        dataArr={data.averageWeightLossPerProgram}
                                    />
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <hr />
                <Footer />
            </MDBContainer>
        </section>
    );
}
export default UserHomePageForm;
