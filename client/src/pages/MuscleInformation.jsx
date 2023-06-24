import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import {
  getTrainingProgramas,
  getTrainingProgramasName,
} from "../controller/requests.js";
import ErrorPage from "./ErrorPage.jsx";
import MIMainComponent from "../componenets/MuscleInformationComp/MIMainComponent.jsx";
import Footer from "../componenets/General/Footer.jsx";
import HelpAndTitle from "../componenets/General/HelpAndTtile.jsx";
import { MDBContainer } from "mdb-react-ui-kit";

const MuscleInformation = () => {
  const [muscle, setMuscle] = useState("");
  const [error, setError] = useState(true);
  const [musclesNames, setMusclesNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataVals, setDataVals] = useState({
    link: [],
    topic: [],
    information: [],
    generalInformation: "",
  });

  useEffect(() => {
    const getDataMusclesNamesFromDB = async () => {
      await getMusclesNames();
      setLoading(false);
    };
    getDataMusclesNamesFromDB();
  }, []);

  useEffect(() => {
    const fetchMuscleInformation = async () => {
      const response = await getTrainingProgramas(muscle);
      if (response === false) {
        setError(true);
      } else {
        const updatedData = {
          link: response.musclesInformation.topics.map((info) => info.link),
          topic: response.musclesInformation.topics.map((info) => info.topic),
          information: response.musclesInformation.topics.map(
            (info) => info.information
          ),
          generalInformation: response.musclesInformation.generalInformation,
        };
        setDataVals(updatedData);
        setError(false);
      }
    };

    if (muscle !== "") {
      fetchMuscleInformation();
    }
  }, [muscle]);

  const getMusclesNames = async () => {
    const response = await getTrainingProgramasName();
    if (response === false) {
      setError(true);
    } else {
      setError(false);
      setMusclesNames(response);
    }
  };

  const handleMuscleChange = (option) => {
    const selectedMuscle = musclesNames.find((muscle) => muscle === option);
    setMuscle(selectedMuscle);
  };

  if (error && !loading) {
    return <ErrorPage toRemove={true} />;
  }

  if (loading && !error) {
    return <ErrorPage toRemove={false} />;
  }

  if (!loading && !error) {
    return (
      <MainLayout>
        <MDBContainer>
          <HelpAndTitle
            title="Muscle Information"
            button_name="Need Help ?"
            headline="Muscle Information "
            body="#Please make sure you choose the muscle that you want to learn about $click on radio button option$
            #After you choose the muscle you will see the information about the muscle 
            #You can click on the link to see the video about the muscle
          
            "
          />
          <MIMainComponent
            musclesNames={musclesNames}
            muscle={muscle}
            handleMuscleChange={handleMuscleChange}
            dataVals={dataVals}
          />
          <Footer />
        </MDBContainer>
      </MainLayout>
    );
  }
};

export default MuscleInformation;
