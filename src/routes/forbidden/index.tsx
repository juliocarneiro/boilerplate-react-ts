import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Result, Button } from 'antd';
import ResultWrapper from '../style';

const Forbidden = ({ history }: RouteComponentProps) => (
  <ResultWrapper>
    <Result
      status="403"
      title="403"
      subTitle="Desculpe, você não acesso a este recurso."
      extra={
        <Button type="primary" onClick={() => history.goBack()}>
          Voltar
        </Button>
      }
    />
  </ResultWrapper>
);

export default withRouter(Forbidden);
