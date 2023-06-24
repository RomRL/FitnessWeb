
import React from 'react';
import  Login  from './componenets//AuthPageComp//LoginComponent.jsx';
import  Register  from './componenets//AuthPageComp//RegisterComponent.jsx';
import {TrainingForm} from './/pages/TrainingPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage.jsx';
import MuscleInformation from './pages/MuscleInformation.jsx';
//Routes for the app to navigate to different pages 
//Depending on the path in the url loading components 
function App() {
  return (
    <BrowserRouter>
        <Routes>
          //if the user is logged in the user page will be loaded
          //if not the home page will be loaded
          {localStorage.getItem("access_token") ? (
            <Route path="/" element={<UserHomePage />} />
          ) : (
            <Route path="/" element={<HomePage />} />   
          )}
          <Route path="userpage" element={<UserHomePage />} />
          <Route path="training" element={<TrainingForm />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="muscleInformation" element={<MuscleInformation />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

