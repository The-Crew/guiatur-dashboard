import React from 'react';

import { Content } from 'common';

import GraficoFaturamento from './components/GraficoFaturamento';
import GraficoFaturamentoPorServico from './components/GraficoFaturamentoPorServico';

export default props => (
  <Content
    title="Faturamento"
    breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Faturamento', path: '#/faturamento' }]}
  >
    <GraficoFaturamento />
    <GraficoFaturamentoPorServico />
  </Content>
);
