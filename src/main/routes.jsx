import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Relatorio from '../relatorio';
import RelatorioCancelados from '../relatorio/cancelados';
import RelatorioFaturamento from '../relatorio/faturamento';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Relatorio} />
    <Route path="/cancelamentos" component={RelatorioCancelados} />
    <Route path="/faturamento" component={RelatorioFaturamento} />
    <Redirect from="*" to="/" />
  </Router>
);
