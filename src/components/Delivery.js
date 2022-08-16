import React from "react";

export default function Delivery() {
  return (
    <div className="delivery">
      <div>
        <h3>Today's Delivery</h3>
        <input type="text" placeholder="Search Here" />
        <div>
          <h6>All Orders</h6>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h5>98659865</h5>
            <h5>ORD-0948</h5>
          </div>
          <div>
            <i class="fa-solid fa-shirt"></i>
          </div>
        </div>
        <div>
          <div>
            <h5>ARIF</h5>
            <h5>ORD-0949</h5>
          </div>
          <div>
            <i class="fa-solid fa-shirt"></i>
            <i class="fa-solid fa-shirt"></i>
          </div>
        </div>
        <div>
          <div>
            <h5>SHIYAS</h5>
            <h5>ORD-0950</h5>
          </div>
          <div>
            <i class="fa-solid fa-hat-cowboy"></i>
          </div>
        </div>
        <div>
          <div>
            <h5>Walk In Customer</h5>
            <h5>ORD-0951</h5>
          </div>
          <div>
            <i class="fa-solid fa-shirt"></i>
            <i class="fa-solid fa-hat-cowboy"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
