
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';

import SideBar from '../SideBar';
import Navbar from '../Navbar';


import TableComponent from "../Data";



function Dersler() {
    const navigate= useNavigate();
    return   (
      <div>
        <SideBar></SideBar>
        
        <TableComponent></TableComponent>
        
      
      

      </div>
    )   
}

export default Dersler;