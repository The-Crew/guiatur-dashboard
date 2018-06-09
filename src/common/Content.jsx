import React from 'react';

export default (props) => {

  const listItems = props.breadcrumb.map((item, index) =>
    <li key={index}><a href={item.path ? item.path : '#'}>{item.name}</a></li>
  );

  return (
    <div>
      <div className="content-header">
        <h1>{props.title}</h1>
        <ol className="breadcrumb">
          <li><i className="fa fa-dashboard"></i></li>
          {listItems}
        </ol>
      </div>
      <div className="content">
        {props.children}
      </div>
      <div className="content-footer">
        {props.footer}
      </div>
    </div>
  );
}
