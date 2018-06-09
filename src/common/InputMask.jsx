import React from 'react';
import MaskedInput from 'react-text-mask';

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

  const type = () => {
    if (props.type === 'number') {
      return 'tel';
    } else if (
      props.type !== 'text'
      && props.type !== 'tel'
      && props.type !== 'url'
      && props.type !== 'password'
      && props.type !== 'search'
    ) {
      return 'text';
    }
    return props.type;
  };

  return (
    <div className={`form-group ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={props.icon || props.addon ? 'input-group' : ''}>
        <RenderAddon />
        <MaskedInput
          className={`form-control ${props.classInput ? props.classInput : ''}`}
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          type={type()}
          style={{ marginTop: props.label ? '0px' : '5px', ...props.style }}
          value={props.value ? props.value : undefined}
          defaultValue={props.defaultValue && !props.value ? props.defaultValue : undefined}
          onBlur={props.onBlur}
          onChange={props.onChange}
          readOnly={props.value && !props.onChange || props.readOnly ? true : false}
          mask={props.mask}
        />
      </div>
      <p className="help-block">{props.help}</p>
    </div>
  );
}
