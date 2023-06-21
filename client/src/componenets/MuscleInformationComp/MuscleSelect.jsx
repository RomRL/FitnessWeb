import React from 'react';
import RadioButton from '../General/RadioButton';

// MuscleSelect Component
function MuscleSelect({ musclesNames, muscle, handleMuscleChange }) {
  return (
      <RadioButton
        options={musclesNames}
        selectedOption={muscle ? muscle.name : ""}
        onOptionChange={handleMuscleChange}
      />
  );
}
export default MuscleSelect;