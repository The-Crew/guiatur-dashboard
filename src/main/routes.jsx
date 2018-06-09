import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Relatorio from '../relatorio';
import RelatorioCancelados from '../relatorio/cancelados';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Relatorio} />
    <Route path="/cancelamentos" component={RelatorioCancelados} />
    <Redirect from="*" to="/" />
  </Router>
);
