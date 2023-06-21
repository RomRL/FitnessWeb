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
<MDBRow  className='btn-group mb-5' style={{ background: '#f4f3f8a6' }}  >
  {options.map((option) => (
    <MDBCol key={option} >
      <MDBRadio 
        btn
        btnColor='dark'
        id={`btn-radio${option}`}
        name='options'
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
