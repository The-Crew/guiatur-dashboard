import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <ul className="sidebar-menu tree" data-widget="tree">
    <MenuItem path="#/" label="Painel" icon="dashboard" />
    <MenuTree path="#/" label="Relatório" icon="dashboard">
      <MenuItem path="#/cancelamentos" label="Cancelamentos" icon="dashboard" />
    </MenuTree>
  </ul>
);
