import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Relatorio from '../relatorio';
import RelatorioCancelamentos from '../relatorio/cancelamentos';
import RelatorioFaturamento from '../relatorio/faturamento';
import RelatorioGastosServicos from '../relatorio/gastosServicos';
import RelatorioLucroMensal from '../relatorio/lucroMensal';
import RelatorioSatisfacao from '../relatorio/satisfacao';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Relatorio} />
    <Route path="/cancelamentos" component={RelatorioCancelamentos} />
    <Route path="/faturamento" component={RelatorioFaturamento} />
    <Route path="/gastosServicos" component={RelatorioGastosServicos} />
    <Route path="/lucroMensal" component={RelatorioLucroMensal} />
    <Route path="/satisfacao" component={RelatorioSatisfacao} />
    <Redirect from="*" to="/" />
  </Router>
);
