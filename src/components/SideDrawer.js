import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li>
          <a href="/">About</a>
       </li>
       <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          {/* <a href="/">Products</a> */}
          <div className="dropdown">
                <button className="dropbtn">Products</button>
                <div className="dropdown-content">
                <a href="/">Mobile</a>
                <a href="/">Motorbike</a>
                <a href="/">Cloths</a>
                </div>
                </div>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;