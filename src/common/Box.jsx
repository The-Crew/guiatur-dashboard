import React from 'react';

export default props => (
  <div className={`box ${props.type === false ? '' : (props.type ? `box-${props.type}` : 'box-primary')}`}>
    {
      props.title ?
      <div className="box-header with-border">
        <h3 className="box-title">{props.title}</h3>
      </div>
      : false
    }
    <div className="box-body">
      {props.children}
    </div>
    {
      props.footer ?
      <div className="box-footer">
        {props.footer}
      </div>
      : false
    }
  </div>
);
