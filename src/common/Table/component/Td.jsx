import React from 'react';

export default (props) => {
  const textAlign = props.align ? props.align : 'left';
  return (
    <td style={{ textAlign }}>
      {props.children}
    </td>
  );
};
