import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Footer from "../componenets/General/Footer.jsx";
import ProfilePicture from "../componenets/UserHomePageComp/ProfilePicture.jsx";
import { getUser } from "../controller/requests.js";
import GraphComponent from "../componenets/UserHomePageComp/WeightsPerDateGraph.jsx";
import DayesPerProgramGraph from "../componenets/UserHomePageComp/DayesPerProgramGraph.jsx";
import ChartTrainigGraph from "../componenets/UserHomePageComp/UsagePercentageOfProgramsGraph.jsx";
import DetailsCard from "../componenets/UserHomePageComp/DetailsCard.jsx";
import BigCard from "../componenets/UserHomePageComp/BigCard.jsx";
import getURL from "../assets/assetsUrls.js";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";

import {
  calculateAverage,
  calculateMax,
  calculateMin,
  calculatePopularName,
  currentTrainingName,
  calculateWeightLoss,
  calculateWeightLossPerProgram,
  calculateNormalWeight,
  calculateDaysInEachProgram,
} from "../controller/utils/util_home_page.js";
import ExpertCard from "../componenets/UserHomePageComp/ExpertCard.jsx";


function UserHomePage() {
  const [user, setUser] = useState({});
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState({
    max: 0,
    min: 0,
    average: 0,
    normalWeight: 0,
    standardDeviation: 0,
    median: 0,
    popularName: "",
    currentTraining: "",
    weightLoss: 0,
    weightLossPerProgram: "",
    worstProgram: "",
    averageWeightLossPerProgram: []
  });

  let weights = [];
  let dates = [];
  let trainingNames = [];

  const fetchUser = async () => {
    const response = await getUser();
    if (response === false) {
      setLoading(false);
      return;
    } else {
      const val = response;
      setUser(val);
      setHeight(val.height);
      setAllData(val);
      setError(false);
    }

    // Set loading to false once data is fetched
  };

  const setAllData = async (user) => {
    //dates will be map with key of training.startdate and value of training.name
    console.log("training: ", user.selectedTrainings);
    dates = user.selectedTrainings.map((training) => training.startDate + "," + training.name);
    weights = user.selectedTrainings.map((training) => training.weight);
    trainingNames = user.selectedTrainings.map((training) => training.name);
    console.log("Dates: ", dates);
    console.log("Weights: ", user.selectedTrainings);
    calculateStatistics(user);

  };

  const calculateStatistics = async (user) => {
    // Update property1
    const updatedData = {
      ...data,
      max: calculateMax(weights),
      min: calculateMin(weights),
      average: calculateAverage(weights),
      normalWeight: calculateNormalWeight(user.height, weights[weights.length - 1]),
      popularName: calculatePopularName(trainingNames),
      currentTraining: currentTrainingName(trainingNames),
      weightLoss: calculateWeightLoss(user.selectedTrainings),
      weightLossPerProgram: calculateWeightLossPerProgram(user.selectedTrainings, true),
      averageWeightLossPerProgram: calculateDaysInEachProgram(dates, user.selectedTrainings)


    };

    setData(updatedData);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchUser();
      setLoading(false);
    }
    fetchAllData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  if (error && !loading) {
    return <ErrorPage toRemove={true} />;
  }
  if (loading && !error) {
    return <ErrorPage toRemove={false} />
  }

  if (!loading && !error) {
    weights = user.selectedTrainings.map((training) => training.weight);
    return (
      <MainLayout>
        <section style={{ backgroundColor: "transpert" }}>
          <MDBContainer className="py-4">
             <MDBRow className="py-2 g-4">
              {/* Profile Picture Cube */}
              <ProfilePicture user={user} />
              <MDBCol md='9'>
                {/* User Details Card  */}

                <DetailsCard user={user} height={height} training={data.currentTraining} setHeight={setHeight} color={data.normalWeight.color} />
                {/* Include Max and Min Weight */}
              </MDBCol>
            </MDBRow>

            <MDBRow className="py-4 g-4">
              <BigCard
                title="Weight"
                // set text to be 'You need to work one more time to see the data' if weights is empty else set it to the data
                text={
                  weights.length === 0
                    ? "You need to work one more time to see the data"
                    : `#Max $${data.max}$ \n #Min $${data.min}$ \n #Average $${data.average}$ \n #Weight Loss $${data.weightLoss}$ \n`
                }
                img_src={getURL("weight")}
              />
              <BigCard
                title="Bmi Statistics"
                text={
                  weights.length === 0
                    ? "You need to work one more time to see the data"
                    : data.normalWeight.message + data.normalWeight.status
                }
                img_src={getURL("statistics")}
                picture="https://nutrition.health.gov.lk/wp-content/uploads/2020/12/BMI-1024x569.png"
                fillPicture={true}
              />
              <BigCard
                title="Popular Training"
                text={
                  weights.length === 0
                    ? "You need to work one more time to see the data"
                    : `$${data.popularName}$  #Current Training $${data.currentTraining}$  #Weight Loss Per Program ${data.weightLossPerProgram} \n `
                }
                img_src={getURL("workout")}

              />
            </MDBRow>

            <MDBRow className=" row-cols-md-2 g-4 py-4">
              <MDBCol md='7'>
                <MDBCard className="h-100" >
                  <MDBCardHeader className="fw-bolder text-center">
                    Usage percentage of programs
                  </MDBCardHeader>
                  <MDBCardBody>
                    {weights.length === 0 ? (
                      <p>You need to work one more time to see the data</p>
                    ) : (
                      <ChartTrainigGraph selectedTrainings={user.selectedTrainings} />)}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <ExpertCard data={data.averageWeightLossPerProgram} />

            
            </MDBRow>

            
            <MDBRow className="py-4 g-4">
              <MDBCol>
                <MDBCard >
                  <MDBCardHeader className="fw-bolder text-center">
                    Start weight per new program Graph
                  </MDBCardHeader>
                  <MDBCardBody>
                    {weights.length === 0 ? (
                      <p>You need to work one more time to see the data</p>
                    ) : (
                      <GraphComponent selectedTrainings={user.selectedTrainings} />
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard >
                  <MDBCardHeader className="fw-bolder text-center">
                    Weights per date Graph
                  </MDBCardHeader>
                  <MDBCardBody>
                    {weights.length === 0 ? (
                      <p>You need to work one more time to see the data</p>
                    ) : (
                      <DayesPerProgramGraph data={data.daysInEachProgram} />
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>

            <hr />
            <Footer />
          </MDBContainer>

        </section>

      </MainLayout>
    );
  }

}
export default UserHomePage;

