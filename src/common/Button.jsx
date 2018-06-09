import React from 'react';

import Icon from './Icon';

export default (props) => {
  let className = 'btn btn-block';
  const styleButton = {};

  if (props.color) {
    if (props.color === 'primary'
      || props.color === 'success'
      || props.color === 'info'
      || props.color === 'danger'
      || props.color === 'warning') {
      className += ` btn-${props.color}`;
    } else {
      styleButton.backgroundColor = props.color;
    }
  } else {
    className += ' btn-primary';
  }

  if (props.textColor) {
    if (props.textColor === 'green'
      || props.textColor === 'aqua'
      || props.textColor === 'light'
      || props.textColor === 'red'
      || props.textColor === 'yellow'
      || props.textColor === 'muted') {
      className += ` text-${props.textColor}`;
    } else {
      styleButton.color = props.textColor;
    }
  }

  if (props.icon && props.text) {
    className += ' btn-social';
  }

  if (props.format) {
    className += ` btn-${props.format}`;
  }

  if (props.label) {
    styleButton.marginTop = '0px';
  } else if (!props.label && props.spaceLabel) {
    styleButton.marginTop = '5px';
  }

  if (!props.icon && !props.text) {
    if (props.format === 'xs') {
      styleButton.height = '22px';
    } else if (props.format === 'sm') {
      styleButton.height = '30px';
    } else if (props.format === 'lg') {
      styleButton.height = '46px';
    } else {
      styleButton.height = '34px';
    }
  }

  if (props.classButton) {
    className += ` ${props.classButton}`;
  }

  return (
    <div className={`form-group ${props.className}`}>
      {props.label ? <label htmlFor={props.name}>{props.label}</label> : ''}
      {!props.label && props.spaceLabel ? <label htmlFor={props.name}>&nbsp;</label> : ''}
      <button
        type={props.type ? props.type : 'button'}
        className={className}
        style={{ ...styleButton, ...props.style }}
        onClick={props.onClick}
      >
        {props.icon ? <Icon name={props.icon} style={{ fontSize: '14px' }} /> : ''}
        {props.text}
      </button>
      <p className="help-block">{props.help}</p>
    </div>
  )
};
