import React from 'react';
import { MDBBtnGroup, MDBRadio, MDBCol, MDBRow } from 'mdb-react-ui-kit';
function RadioButton(props) {
  const { options, selectedOption, onOptionChange } = props;

  const handleOptionChange = (option) => {
    if (option !== selectedOption) {
      onOptionChange(option);


    }
  };

  return (
    <MDBRow className='mb-3' style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {options.map((option) => (
          <MDBCol  md='2' key={option}>
            <MDBRadio
              className='mx-1'
              btn
              btnColor='dark'
              id={`btn-radio${option}`}
              name='options'
              wrapperClass='mx-1'
              label={option}
              checked={option === selectedOption}
              onChange={() => handleOptionChange(option)}
            />
          </MDBCol>
        ))}

    </MDBRow>

  );
}

export default RadioButton;
