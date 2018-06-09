import React from 'react';

const TabContent = props => (
  <div className={`tab-pane ${props.selected ? 'active' : ''}`} id={props.id}>
    {props.children}
  </div>
)

export default (TabContent);
