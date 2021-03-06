import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <ul className="sidebar-menu tree" data-widget="tree">
    <MenuItem path="#/" label="Painel" icon="dashboard" />
    <MenuTree path="#/" label="Relatório" icon="dashboard">
      <MenuItem path="#/cancelamentos" label="Cancelamentos" icon="dashboard" />
      <MenuItem path="#/faturamento" label="Faturamento" icon="dashboard" />
      <MenuItem path="#/gastosServicos" label="Gastos serviços" icon="dashboard" />
      <MenuItem path="#/lucroMensal" label="Lucro mensal" icon="dashboard" />
      <MenuItem path="#/satisfacao" label="Satisfação" icon="dashboard" />
    </MenuTree>
  </ul>
);
