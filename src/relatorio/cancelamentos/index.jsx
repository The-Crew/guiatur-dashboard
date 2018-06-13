import React from 'react';

import { Content } from 'common';

import GraficoCancelamentos from './components/GraficoCancelamentos';
import GraficoCancelamentosPorBairro from './components/GraficoCancelamentosPorBairro';

export default props => (
  <Content
    title="Cancelamentos"
    breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Cancelamentos', path: '#/cancelamentos' }]}
  >
    <GraficoCancelamentos />
    <GraficoCancelamentosPorBairro />
  </Content>
);
