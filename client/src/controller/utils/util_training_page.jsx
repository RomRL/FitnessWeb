/**
 *  training page
 *  this page is used to show the user the training videos and the training form
 * it uses the TrainingVideos.jsx and TrainingForm.jsx components
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';
import RadioButton from '../components/RadioButton';
import TrainingVideos from '../components/TrainingVideos';
import TrainingForm from '../components/TrainingForm';

// AllTrainings Component - this component is used to show the user the training videos and the training form
export function AllTrainings() {
  const [selectedTraining, setSelectedTraining] = useState();
  const [trainings, setTrainings] = useState([]);
  const [newWeight, setNewWeight] = useState();
  
  // Fetch all trainings from the server
  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await axios.get('https://fitness-api-974s.onrender.com/trainings');
        const data = response.data.trainings;
        setTrainings(data);
      } catch (error) {
        console.error('Error fetching trainings:', error);
      }
    };

    fetchTrainings();
  }, []);

  // Handle training selection 
  const handleTrainingChange = (option) => {
    const selectedTraining = trainings.find((training) => training.name === option);
    setSelectedTraining(selectedTraining);
  };
  // Add training program to the server 
  const addTrainingProgram = async () => {
    try {
      await axios.post('https://fitness-api-974s.onrender.com/trainings', {
        userID: localStorage.getItem('userId'),
        trainingName: selectedTraining.name,
        new_weight: newWeight,
      });
    } catch (error) {
      console.error('Error adding training program:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <MainLayout>
      <div className="container">
        <h3>Select a training:</h3>
        <RadioButton
          options={trainings.map((training) => training.name)}
          selectedOption={selectedTraining ? selectedTraining.name : ''}
          onOptionChange={handleTrainingChange}
        />

        {selectedTraining && (
          <div>
            <h3>Selected Training: {selectedTraining.name}</h3>
            <TrainingVideos selectedTraining={selectedTraining} />

            <div className="d-flex justify-content-center">
              <TrainingForm
                newWeight={newWeight}
                setNewWeight={setNewWeight}
                handleSubmit={handleSubmit}
                addTrainingProgram={addTrainingProgram}
              />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default AllTrainings;
