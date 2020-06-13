import React, { Component } from 'react';

import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import Form from './components/Form';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
         <div className="image" > 
          {/* <img src="https://www.pngkit.com/png/detail/909-9098186_free-png-download-child-group-play-png-images.png" /> */}
            <h3>Lorem Ipsum doler sit amet</h3>
            <p>Lorem Ipsum doler sit amet <br />Lorem Ipsum doler sit amet</p>
           
           <div className="border-text">
           <p >Lorem Ipsum doler sit amet <br />Lorem Ipsum doler sit amet</p>          
           </div>

           <div className="border-text2">
           <p >Lorem Ipsum doler sit amet <br />Lorem Ipsum doler sit amet</p>          
           </div> 
          
            <Form />
         <div className="space"></div>
          
       </div> 
        
      </div>
    );
  }
}

export default App;