import React from "react";
import "./Overview.css";
import pie from "../assets/pie-chart.png"

export default function Overview() {
  return (
    <div className="overview">
      <h3>Overview</h3>
      <div className="overview-item">
        <img src={pie} alt="" />
        <div className="overview-item-1">
          <div>
            <i className="fa-solid fa-circle purple"></i>
            <h5>Pending</h5>
          </div>

          <div>
            <i className="fa-solid fa-circle yellow"></i>
            <h5>Processing</h5>
          </div>

          <div>
            <i className="fa-solid fa-circle green"></i>
            <h5>Ready To Deliver</h5>
          </div>

          <div>
            <i className="fa-solid fa-circle blue"></i>
            <h5>Delivered</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
