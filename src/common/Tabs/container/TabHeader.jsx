import React from 'react';
import { connect } from 'react-redux';

import Icon from 'common/Icon';

const TabHeader = (props) => {
  const styleSelected = props.selected
    ? { li: { }, a: { } }
    : { li: { cursor: 'pointer', borderColor: '#BBB', backgroundColor: '#EEE' }, a: { backgroundColor: '#EEE' } };

  return (
    <li className={props.selected ? 'active' : ''} style={{ ...styleSelected.li, width: '235px' }}>
      <a
        style={{
          ...styleSelected.a,
          float: 'left',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: props.fixable || props.fixed ? '190px' : '213px',
        }}
        data-toggle="tab"
        data-target={props.target}
        onClick={props.onClick}
        onKeyUp={() => {}}
      >
        {props.icon ? <Icon name={props.icon} /> : ''} {props.label}
        {props.children ? props.children : null}
      </a>
      {props.closable ?
        <button
          style={{ float: 'right', marginTop: '10px' }}
          className="btn btn-xs btn-default"
          onClick={props.closable}
        >
          <Icon name="close" color="red" />
        </button>
      : null}
      {props.fixable && !props.fixed ?
        <button
          style={{ float: 'right', marginTop: '10px', marginRight: '2px' }}
          className="btn btn-xs btn-default"
          onClick={props.fixable}
        >
          <Icon name="thumb-tack" style={{ transform: 'rotate(45deg)' }} />
        </button>
      : null}
      {props.fixed ?
        <button
          style={{ float: 'right', marginTop: '10px', marginRight: '2px' }}
          className="btn btn-xs btn-default"
          onClick={props.fixed}
        >
          <Icon name="thumb-tack" />
        </button>
      : null}
    </li>
  );
};

const mapStateToProps = state => ({ sidebarOpen: state.header.sidebarOpen });

export default connect(mapStateToProps)(TabHeader);
