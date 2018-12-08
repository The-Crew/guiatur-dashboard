import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeStateSidebar } from '../headerActions';

const Header = props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span
        className="logo-mini"
        style={{ fontSize: 10, lineHeight: '10px', marginTop: 16 }}
      >BA</span>
      <span className="logo-lg">
        GuiaTur
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" onClick={() => props.changeStateSidebar()}></a>
    </nav>
  </header>
);

const mapDispatchToProps = dispatch => bindActionCreators({ changeStateSidebar }, dispatch);

export default connect(null, mapDispatchToProps)(Header);
