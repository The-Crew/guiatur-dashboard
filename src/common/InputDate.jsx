import React from 'react';
const DatePicker = require('react-datetime');

export default (props) => {
  let className = 'form-group';
  if (props.className) className += ` ${props.className}`;
  if (props.isInvalid) className += ' has-error';

  let classInput = 'form-control';
  if (props.classInput) classInput += ` ${props.classInput}`;
  if (props.now || props.today) classInput += ' now';

  return (
    <div className={className}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={props.icon === false ? '' : 'input-group date'}>
        {props.icon === false
          ? ''
          : <span className="input-group-addon"><i className={props.icon ? `fa fa-${props.icon}` : 'fa fa-calendar'}></i></span>
        }
        <DatePicker
          locale="pt-br"
          dateFormat="DD/MM/YYYY"
          value={props.value ? props.value : false}
          defaultValue={props.defaultValue && !props.value ? props.defaultValue : moment()}
          timeFormat={false}
          closeOnSelect
          onBlur={props.onBlur}
          onChange={props.onChange}
          inputProps={{
            placeholder: (props.placeholder ? props.placeholder : "dd/mm/aaaa"),
            readOnly: (props.value && !props.onChange || props.readOnly),
            name: (props.name ? props.name : ''),
            id: (props.name ? props.name : ''),
            className: classInput,
          }}
          style={{ marginTop: props.label ? '0px' : '5px', ...props.style }}
        />
      </div>
      <p className="help-block">{props.help}</p>
    </div>
  );
}
