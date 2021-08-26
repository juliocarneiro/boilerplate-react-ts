import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

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
      <Spin size="large" />
    </SpinStyle>
  );
}

export default Spinner;
