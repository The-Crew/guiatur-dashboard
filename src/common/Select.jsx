import React from 'react';
import Select from 'react-select';

export default (props) => {
  return (
    <div className={`form-group ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <Select
        className={props.classSelect ? props.classSelect : ''}
        id={props.name}
        name={props.name}
        value={props.value}
        defaultValue={props.defaultValue}
        options={props.options}
        style={{ marginTop: props.label ? '0px' : '5px', ...props.style }}
        onChange={props.onChange}
      />
      <p className="help-block">{props.help}</p>
    </div>
  );
}
