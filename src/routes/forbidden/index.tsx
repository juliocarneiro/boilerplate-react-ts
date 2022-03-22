import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ResultWrapper from '../style';

const Forbidden = ({ history }: RouteComponentProps) => (
  <ResultWrapper>
    <div>
      <h1>403</h1>
      <p>Desculpe, você não acesso a este recurso.</p>
      <button type="button" onClick={() => history.goBack()}>
        Voltar
      </button>
    </div>
  </ResultWrapper>
);

export default withRouter(Forbidden);
