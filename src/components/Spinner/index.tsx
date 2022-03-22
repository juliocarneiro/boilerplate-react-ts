import React from 'react';
import styled from 'styled-components';

const SpinStyle = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function Spinner() {
  return (
    <SpinStyle>
      <p>Loading...</p>
    </SpinStyle>
  );
}

export default Spinner;
