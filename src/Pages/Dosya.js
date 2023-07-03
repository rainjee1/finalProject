import Button from '@mui/material/Button'
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';


import SideBar from "../SideBar";
import Navbar from "../Navbar";
import { CFormInput } from "@coreui/react";
function Dosya() {

      const navigate= useNavigate();
    return (
      <div class='body flex-grow-1 px-3' className="page2">
       <SideBar></SideBar>
        <Navbar></Navbar>
        <div className="mb-3">
            
  <CFormInput type="file" accept=".doc, .docx" id="formFileMultiple" label="Lütfen gerekli evrakları seçip yükleyiniz." multiple  className="file" name="file.pdf"/>
</div>
<Button variant="contained" color="success">
        Yükle
      </Button>
      </div>
    )   
}

export default Dosya;