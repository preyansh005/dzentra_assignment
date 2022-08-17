import "./App.css";
import { useState } from "react";
import Delivery from "./components/Delivery";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Overview from "./components/Overview";
import SideBar from "./components/SideBar";

function App() {
  const [toggleNavbar, settoggleNavbar] = useState(true);
  const passData = (data) => {
    if (data) {
      settoggleNavbar(false);
    } else {
      settoggleNavbar(true);
    }
  };

  return (
    <>
      <div className="mainsidebar">{toggleNavbar ? <SideBar /> : <></>}</div>

      <div className="mainsidebar-2">
        <div className="mainnavbar">
          <Navbar passData={passData} />
        </div>

        <div className="orders">
          <Order
            name="PENDING ORDER"
            number={202}
            className="fa-cart-shopping red"
          />
          <Order
            name="PROCESSING ORDER"
            number={99}
            className="fa-cart-shopping yellow"
          />
          <Order
            name="READY TO DELIVER"
            number={263}
            className="fa-thumbs-up green"
          />
          <Order
            name="DELIVERED ORDERS"
            number={345}
            className="fa-check blue"
          />
        </div>

        <div className="section-2">
          <Delivery />
          <Overview />
        </div>
      </div>
    </>
  );
}

export default App;
