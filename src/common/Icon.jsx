import React from 'react';

export default (props) => {
  let className = '';
  let style = { ...props.style };

  if (props.name) {
    className += `fa fa-${props.name}`;
  }
  if (props.color && !style.color) {
    if (
      props.color === 'green'
      || props.color === 'aqua'
      || props.color === 'light'
      || props.color === 'red'
      || props.color === 'yellow'
      || props.color === 'muted'
    ) {
      className += ` text-${props.color}`;
    } else {
      style.color = props.color;
    }
  }
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <i style={style} className={className}></i>
  );
};
