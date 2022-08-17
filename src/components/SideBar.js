import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="menu">
      <div className="laundary">
        <i className="fa-solid fa-cloud-arrow-up"></i>
        <h5>LAUNDRY</h5>
      </div>
      <div className="item item-1">
        <i className="fa-solid fa-shop"></i>
        <h5>Dashboard</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-tag"></i>
        <h5>Pos</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-cart-shopping"></i>
        <h5>Orders</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-list"></i>
        <h5>Order Status Screen</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-book"></i>
        <h5>Expense</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-user"></i>
        <h5>Customers</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-tag"></i>
        <h5>Services</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-chart-line"></i>
        <h5>Reports</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-gear"></i>
        <h5>Tools</h5>
      </div>
      <div className="item">
        <i className="fa-solid fa-right-from-bracket"></i>
        <h5>Logout</h5>
      </div>
    </div>
  );
}
