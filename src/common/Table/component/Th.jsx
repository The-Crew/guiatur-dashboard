import React from 'react';

import Icon from 'common/Icon';

export default (props) => {
  let icon = 'sort-amount-asc';
  const iconColor = props.active ? '' : '#999';

  if (props.asc) {
    icon = 'sort-amount-asc';
  } else if (props.desc) {
    icon = 'sort-amount-desc';
  }

  return (
    <th
      className={props.className ? props.className : ''}
      style={{ cursor: 'pointer', minWidth: props.minWidth, width: props.width, ...props.style}}
      onMouseOver={(e) => e.target.style.color="#777"}
      onMouseOut={(e) => e.target.style.color=""}
    >
      <div style={{ width: props.width }}>{props.children} {props.sortingOff ? '' : <Icon style={{ float: 'right' }} name={icon} color={iconColor} />}</div>
    </th>
  );
};
