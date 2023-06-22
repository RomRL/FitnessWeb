import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import MainLayout from "../../layout/MainLayout";
import Footer from "..//General/Footer.jsx";
import "..//..//assets/App.css";
import { login } from "../../controller/requests";

// bootstrap imports
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

// Login Function  login to the app
function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      // Show modal based on login result
      setShowModal(true);
      setModalOption("success"); // or 'error'
      setModalMessage("Invalid credentials"); // Set the appropriate message
      window.localStorage.setItem("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userID);
    } catch (err) {
      setModalOption("error");
      setShowModal(true);
      console.error(err);
    }
  };

  const handleEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleModalClose = () => {
    setShowModal(false);
    if (modalOption === "success") {
      navigate("/userpage");
    }
  };

  return (
    <MainLayout >

      <LoginForm
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />

      <LoginModal
        showModal={showModal}
        modalOption={modalOption}
        modalMessage={modalMessage}
        handleModalClose={handleModalClose}
        setShowModal={setShowModal}
      />
      <hr />
      <Footer />

    </MainLayout>

  );
}

export default LoginComponent;
