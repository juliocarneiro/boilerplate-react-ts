import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ResultWrapper from '../style';

const NotFound = ({ history }: RouteComponentProps) => (
  <ResultWrapper>
    <div>
      <h1>404</h1>
      <p>Desculpe, esta página não existe.</p>
      <button type="button" onClick={() => history.goBack()}>
        Voltar
      </button>
    </div>
  </ResultWrapper>
);

export default withRouter(NotFound);
