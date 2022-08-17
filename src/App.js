import './App.css';
import Delivery from './components/Delivery';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Overview from './components/Overview';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
    <div className="mainsidebar">
      <SideBar />
    </div>
    <div className="mainsidebar-2">
      <div className='mainnavbar'>
        <Navbar />
      </div>
    <div className="orders">
      <Order name="PENDING ORDER" number={202} className="fa-cart-shopping"/>
      <Order name="PROCESSING ORDER" number={99} className="fa-cart-shopping"/>
      <Order name="READY TO DELIVER" number={263} className="fa-thumbs-up"/>
      <Order name="DELIVERED ORDERS" number={345} className="fa-check"/>
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
