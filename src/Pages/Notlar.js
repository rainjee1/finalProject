import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';
import { faBell, faBook, faHome, faNoteSticky, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from '../SideBar';
import Navbar from '../Navbar';
import MyComponent from '../Data';
function Notlarim() {

    const navigate= useNavigate();
    return    ( <main>
      <div>
        <SideBar></SideBar>
        <Navbar></Navbar>
        <MyComponent></MyComponent>
      </div>
      </main>
    )   
}

export default Notlarim;