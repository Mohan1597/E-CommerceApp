import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { backgroundColorGray } from '../product-owners/styles';
import { Navigate, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

export default function NavigationBar({children}) {

  const navigate = useNavigate();

  const onButtonClick = (text) =>{
      if(text == 'Logout'){
        navigate('/');
      }
  }

  const onNavigate = (text) => {
      if(text === 'Dashboard'){
        navigate('/podashboard');
      }
      else if(text === 'Product History'){
        navigate('/product-history');
      }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            DSEll App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Dashboard', 'Product History'].map((text, index) => (
            <ListItem key={text} onClick={()=>{onNavigate(text)}} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <HistoryIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{bottom: '0px'}}>
          {['Settings','Logout'].map((text, index) => (
         <ListItem key={text} disablePadding>
              <ListItemButton  onClick={() => onButtonClick(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <SettingsIcon /> : <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3,marginTop: '40px' }}
        style={backgroundColorGray}
      >
        <Toolbar />
           {children}
      
      </Box>
    </Box>
  );
}
