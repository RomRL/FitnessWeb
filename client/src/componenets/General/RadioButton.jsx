import React from 'react';
import { MDBRadio, MDBContainer } from 'mdb-react-ui-kit';

function RadioButton(props) {
  const { options, selectedOption, onOptionChange } = props;

  const handleOptionChange = (option) => {
    if (option !== selectedOption) {
      onOptionChange(option);
    }
  };

  return (
    <MDBContainer >

      {options.map((option) => (
        <MDBRadio
          key={option}
          btn
          btnColor='dark'
          id={`btn-radio${option}`}
          name='options'
          label={option}
          checked={option === selectedOption}
          wrapperTag='span'

          onChange={() => handleOptionChange(option)}
          style={{ width: '100%'  }} 
        />
      ))}
    </MDBContainer>
  );
}

export default RadioButton;
