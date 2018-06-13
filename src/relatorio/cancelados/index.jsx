import React from 'react';

import { Content } from 'common';

import GraficoCancelados from './components/GraficoCancelados';
import GraficoCanceladosPorBairro from './components/GraficoCanceladosPorBairro';

export default props => (
  <Content
    title="Cancelamentos"
    breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Cancelamentos', path: '#/cancelamentos' }]}
  >
    <GraficoCancelados />
    <GraficoCanceladosPorBairro />
  </Content>
);
