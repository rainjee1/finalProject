import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBook, faFileArchive, faHome, faNoteSticky, faUserGear } from '@fortawesome/free-solid-svg-icons';

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate= useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className='appbar'>
        <Toolbar className='tool'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            İskenderun Teknik Üniversitesi Yaz Okulu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className='drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className='drawerhd'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        <SideNav className="sidebar"  position='sticky'
   onSelect={selected => {
       console.log(selected)
       navigate('/'+selected)
   }} 
    
   > 
   
     <SideNav.Toggle   /> 
      <SideNav.Nav defaultSelected='selected'>
      <NavItem eventKey="HomePage">
        <NavIcon><FontAwesomeIcon icon={faHome}/></NavIcon>
        <NavText>Anasayfa</NavText>
      </NavItem>
      <NavItem eventKey="Dersler">
        <NavIcon><FontAwesomeIcon icon={faBook}/></NavIcon>
        <NavText>Derslerim</NavText>
      </NavItem>
      <NavItem eventKey="Notlar">
        <NavIcon><FontAwesomeIcon icon={faNoteSticky}/></NavIcon>
        <NavText>Notlarim</NavText>
      </NavItem>
      <NavItem eventKey="Duyurular">
        <NavIcon><FontAwesomeIcon icon={faBell}/></NavIcon>
        <NavText>Duyurular</NavText>
      </NavItem>
      <NavItem eventKey="Dosya">
        <NavIcon><FontAwesomeIcon icon={faFileArchive}/></NavIcon>
        <NavText>Belge Yükleme</NavText>
      </NavItem>
      <NavItem eventKey="Ayarlar">
        <NavIcon><FontAwesomeIcon icon={faUserGear}/></NavIcon>
        <NavText>Ayarlar</NavText>
        <NavItem eventKey="Kullanici">
          <NavText>Kullanici</NavText>
        </NavItem>
        <NavItem eventKey="SifreSifirla"> 
          <NavText>Sifre Guncelle</NavText>
        </NavItem>
      </NavItem>
    </SideNav.Nav>

    </SideNav>

        <Divider  className='divider'/>
       
      </Drawer>
      <Main open={open} className='main'>
        <DrawerHeader />
     
      </Main>
    </Box>
  );
}