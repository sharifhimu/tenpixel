import React from 'react';

import DrawerToggleButton from './DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">

<div className="grid-container">

  <div className="grid-item-star">
  <i className="fa fa-star icon-star" />
  <i className="fa fa-star icon-star" />
  <i className="fa fa-star icon-star" />
  <i className="fa fa-star icon-star-br" />
  
  <p className="icontext-star">/8.5</p>
 </div>

  <div className="grid-item">
  <i className="fa fa-envelope icon" />
  <p className="icontext">Lorem ipsum doler sit amet</p>
  </div>
  <div className="grid-item">
  <i className="fa fa-linkedin icon" />
  <p className="icontext">Lorem ipsum doler sit amet</p>
  
  </div>
  <div className="grid-item">
  <i className="fa fa-facebook-square icon" />
  <p className="icontext">Lorem ipsum doler sit amet</p>
      
  </div>  
</div>  

    <nav className="toolbar__navigation">
    
    <div className="spacer1" />
        <div className="toolbar_navigation-items1">
            <ul>

                <li><a href="/">About</a></li>
                <li><a href="/">Contact us</a></li>
            
            </ul>

        </div>
    {/* </nav> */}

    <div className="grid-item-star2">
            <i className="fa fa-star icon-star2" />
            <i className="fa fa-star icon-star2" />
            <i className="fa fa-star icon-star2" />
            <i className="fa fa-star icon-star-br2" />
            
            <p className="icontext-star2">/8.5</p>
            </div>
            
        
    {/* {/* <nav className="toolbar__navigation"> */}
         <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div> 
        
        

        <div className="toolbar__logo"><a href="/">LOGO</a></div> 
        
        

        <div className="spacer2" />
        <div className="toolbar_navigation-items2">
            <ul>
                 <li><a href="/">Sell</a></li> 
                
                <div className="dropdown">
                <button className="dropbtn">Products</button>
                <div className="dropdown-content">
                <a href="/">Mobile</a>
                <a href="/">Motorbike</a>
                <a href="/">Cloths</a>
                </div>
                </div>

                <li><a href="/">Users</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;