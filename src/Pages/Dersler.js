
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';

import SideBar from '../SideBar';
import Navbar from '../Navbar';
import { CFormSelect } from "@coreui/react";

function Dersler() {
    const navigate= useNavigate();
    return   (
      <div>
        <SideBar></SideBar>
        <Navbar></Navbar>

      </div>
    )   
}

export default Dersler;