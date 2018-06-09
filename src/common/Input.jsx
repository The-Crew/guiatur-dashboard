import React from 'react';

import Icon from './Icon';

export default (props) => {
  const RenderAddon = () => {
    if (props.icon) {
      return (
        <span className="input-group-addon">
          <Icon name={props.icon} />
        </span>
      );
    } else if (props.addon) {
      return (
        <span className="input-group-addon">
          {props.addon}
        </span>
      );
    }
    return null;
  };

  return (
    <div className={`form-group ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={props.icon || props.addon ? 'input-group' : ''}>
        <RenderAddon />
        <input
          className={`form-control ${props.classInput ? props.classInput : ''}`}
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          type={props.type ? props.type : 'text'}
          style={{ marginTop: props.label ? '0px' : '5px', ...props.style }}
          value={props.value ? props.value : undefined}
          defaultValue={props.defaultValue && !props.value ? props.defaultValue : undefined}
          onBlur={props.onBlur}
          onChange={props.onChange}
          readOnly={props.value && !props.onChange || props.readOnly ? true : false}
        />
      </div>
      <p className="help-block">{props.help}</p>
    </div>
  );
};
