import { CButton, CCollapse, CContainer, CForm, CFormInput, CNavItem, CNavLink, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler } from "@coreui/react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"
export default function Navbar() {
 
    const [visible, setVisible] = useState(false)
    return (
      <>
        <CNavbar expand="lg" colorScheme="light" className="bg-light">
          <CContainer fluid>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
            <CNavbarBrand href="#">Kullanıcı</CNavbarBrand>
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav className="me-auto mb-2 mb-lg-0">
                <CNavItem>
                  <CNavLink href="HomePage" active>
                    Anasayfa
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="https://obs.iste.edu.tr/oibs/ogrenci/login.aspx">Öğrenci Bilgilendirme Sistemi</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Kullanıcı Profili
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
              <CForm className="d-flex">
                <CFormInput type="search" className="me-2" placeholder="Search" />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>
    )
}