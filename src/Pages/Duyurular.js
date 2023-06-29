
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';

import SideBar from '../SideBar';
import Navbar from '../Navbar';
import { CToast,CToastBody,CToastHeader} from "@coreui/react";
function Duyurular() {
    const navigate= useNavigate();
    return    (
      <div className="page" class='sidebar sidebar-fixed'>
        <SideBar ></SideBar>
        <Navbar></Navbar>
        <CToast autohide={false} visible={true} className="toast">
  <CToastHeader closeButton> 
    <svg
      className="rounded me-2"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
      <rect width="100%" height="100%" fill="#007aff"></rect>
    </svg>
    <div className="fw-bold me-auto">Yaz Okulu Otomasyonu</div>
    <small>Bir süre önce
    </small>
  </CToastHeader>
  <CToastBody>Henüz bir duyuru yayınlanmamıştır.</CToastBody>
</CToast>
      </div>
    )   
}

export default Duyurular;