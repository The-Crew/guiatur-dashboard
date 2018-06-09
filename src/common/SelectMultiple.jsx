import React from 'react';
import Select from 'react-select';

export default (props) => {
  console.log(props);
  return (
    <div className={`form-group ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <Select
        className={`form-control ${props.classSelect}`}
        style={{ marginTop: props.label ? '0px' : '5px', ...props.style }}
        multi
        data={props.data}
        options={props.options}
        id={props.name}
        name={props.name}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={(e) => {console.log(e); props.onChange(e);}}
      />
      <p className="help-block">{props.help}</p>
    </div>
  );
}
