import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const [toggleSidebar, settoggleSidebar] = useState(true);
  const toggleSideBar = () => {
    // console.log("Clicked...")
    if (toggleSidebar) {
      // console.log("child true");
      props.passData(toggleSidebar)
      settoggleSidebar(false);
    } else {
      // console.log("child false");
      props.passData(toggleSidebar)
      settoggleSidebar(true);
    }
  };
  return (
    <div className="navbar">
      <i onClick={toggleSideBar} className="fa-solid fa-bars"></i>
      <div className="right-grp">
        <div className="right-grp-1">
          <i className="fa-solid fa-circle-plus"></i>
          <i className="fa-solid fa-tag"></i>
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="right-grp-2">
          <h5>English</h5>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
}
