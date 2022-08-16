import React from "react";

export default function Overview() {
  return (
    <div>
      <h3>Overview</h3>
      <div>
        <i class="fa-regular fa-circle"></i>
        <div>
          <h5>Pending</h5>
          <i class="fa-solid fa-circle"></i>
        </div>
        <div>
          <h5>Processing</h5>
          <i class="fa-solid fa-circle"></i>
        </div>
        <div>
          <h5>Ready To Deliver</h5>
          <i class="fa-solid fa-circle"></i>
        </div>
        <div>
          <h5>Delivered</h5>
          <i class="fa-solid fa-circle"></i>
        </div>
      </div>
    </div>
  );
}
