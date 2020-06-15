import React from 'react';
import './Form.css';

const Form = () => {
    return (
        
            <div className="wrapper">
  <div className="payment">
    
    
    <h2>Payment Details</h2>
    <div className="form">
      <div className="card space icon-relative">
        <label className="label">Cardholder's name:</label>
        <input type="text" className="input" placeholder="Enter your name" />
        <i className="fa fa-user"></i>
      </div>
      <div className="card space icon-relative">
        <label className="label">Card number:</label>
        <input type="text" className="input" placeholder="Enter your Card Number" />
        <i className="fa fa-credit-card"></i>
      </div>
      <div className="space">
      <label className="label">On/Off</label>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      </div>
      <div className="card-grp space">
        <div className="card-item icon-relative">
          <label className="label">Expiry date:</label>
          <input type="number" name="expiry-data" className="input"  placeholder="00 / 00" />
          <i className="fa fa-calendar"></i>
        </div>
        <div className="card-item icon-relative">
          <label className="label">CVC:</label>
          <input type="text" className="input" placeholder="000" />
          <i class="fa fa-lock"></i>
        </div>
      </div>
        
      {/* <div className="btn">
        Pay
      </div>  */}
      <button className="btn" >Pay</button>
      
    </div>
  </div>
</div>
        
    );
};

export default Form;