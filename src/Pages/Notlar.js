import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';
import { faBell, faBook, faHome, faNoteSticky, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from '../SideBar';
import Navbar from '../Navbar';
function Notlarim() {

    const navigate= useNavigate();
    return    (
      <div>
        <SideBar></SideBar>
        <Navbar></Navbar>
      </div>
    )   
}

export default Notlarim;