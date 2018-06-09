import React from 'react';
import { Table } from 'react-bootstrap';

export default props => (
  <Table
    className={props.className}
    bordered={props.bordered}
    condensed={typeof(props.condensed) === 'undefined' ? true : props.condensed}
    hover={typeof(props.hover) === 'undefined' ? true : props.hover}
    responsive={typeof(props.responsive) === 'undefined' ? true : props.responsive}
  >
    {props.children}
  </Table>
);
