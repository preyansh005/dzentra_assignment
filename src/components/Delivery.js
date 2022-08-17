import React from "react";
import "./Delivery.css";

export default function Delivery() {
  return (
    <div className="delivery">
      <div className="delivery-sec-1">
        <h3>Today's Delivery</h3>
        <input type="text" placeholder="Search Here" />
        <div>
          <h6>All Orders</h6>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="delivery-sec-2">
        <div className="delivery-sec-2-item yellow">
          <div>
            <h5>98659865</h5>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h5>ORD-0948</h5>
        </div>
        <div className="delivery-sec-2-item red ">
          <div>
            <h5>ARIF</h5>
            <i className="fa-solid fa-shirt"></i>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h5>ORD-0949</h5>
        </div>
        <div className="delivery-sec-2-item gray">
          <div>
            <h5>SHIYAS</h5>
            <i className="fa-solid fa-hat-cowboy"></i>
          </div>
          <h5>ORD-0950</h5>
        </div>
        <div className="delivery-sec-2-item gray">
          <div>
            <h5>Walk In Customer</h5>
            <i className="fa-solid fa-hat-cowboy"></i>
            <i className="fa-solid fa-shirt"></i>
          </div>
          <h5>ORD-0951</h5>
        </div>
      </div>
    </div>
  );
}
