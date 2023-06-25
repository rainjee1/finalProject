import React from 'react'
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBook, faHome, faNoteSticky, faUserGear } from '@fortawesome/free-solid-svg-icons';

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Navbar from '../Navbar';
import SideBar from '../SideBar';


function HomePage()
{
  
 return  (
  <div>
    <SideBar></SideBar>
    <Navbar></Navbar>
  </div>
  
 )

    
  

} 

export default HomePage;
