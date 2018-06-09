import React from 'react';

import { Tr } from 'common/Table';

export default props => (
  <thead>
    <tr role="row">
      {props.children}
    </tr>
  </thead>
);
