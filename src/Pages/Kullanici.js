
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';
import SideBar from "../SideBar";
import Navbar from "../Navbar";
function Kullanici() {  

      const navigate= useNavigate();
    return (
      <div>
        <SideBar></SideBar>
        <Navbar></Navbar>
      </div>
    )   
}

export default Kullanici;