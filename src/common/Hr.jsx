import React from 'react';

import Icon from './Icon';

export default (props) => {

  return (
    <div className={`hr ${props.className || ''}`}>
      <div className={`hr-label ${props.color || ''}`} style={{ ...props.styleLabel }}>
        {props.icon ? <Icon name={props.icon} style={{ ...props.styleIcon }} /> : null}
        {props.label || null}
      </div>
      <hr className={`hr-line ${props.color || ''}`} style={{ ...props.styleLine }} />
    </div>
  );
}
