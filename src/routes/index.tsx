import React, { Suspense } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from 'components/Spinner';

const NotFound = React.lazy(() => import('./notFound'));
const Forbidden = React.lazy(() => import('./forbidden'));
const Home = React.lazy(() => import('pages/Home'));
const Solicitation = React.lazy(() => import('pages/Solicitation'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact path="/solicitation/:id" component={Solicitation} />
        <Route path="/forbidden" component={Forbidden} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
