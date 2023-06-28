
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';

import SideBar from '../SideBar';
import Navbar from '../Navbar';
import { CFormSelect } from "@coreui/react";
function Duyurular() {
    const navigate= useNavigate();
    return    (
      <div>
        <SideBar></SideBar>
        <Navbar></Navbar>
        <CFormSelect size="sm" aria-label="Default select example" className='selectlist'>
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3" disabled>Three</option>
</CFormSelect>
      </div>
    )   
}

export default Duyurular;