import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Result, Button } from 'antd';
import ResultWrapper from '../style';

const NotFound = ({ history }: RouteComponentProps) => (
  <ResultWrapper>
    <Result
      status="404"
      title="404"
      subTitle="Desculpe, esta página não existe."
      extra={
        <Button type="primary" onClick={() => history.goBack()}>
          Voltar
        </Button>
      }
    />
  </ResultWrapper>
);

export default withRouter(NotFound);
