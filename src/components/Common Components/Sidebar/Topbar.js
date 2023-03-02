import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material"
import colorConfigs from "../../configs/colorConfigs"
import sizeConfigs from "../../configs/sizeConfigs"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "../../Common Components/Topbar.css";
import Divider from '@mui/material/Divider';

const useStyles = makeStyles(() => ({
  myAccount: {
    color: '#188dc7',
    textDecoration: 'none'
  },
  notificationStyle: {
    fontSize: '28px',
    color: '#fff',
    cursor: 'pointer',
  }
}));

const Topbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setAnchorEl(null);
    localStorage.setItem('isLoginType', 0)
    window.location.reload()
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <div className="d-flex justify-content-end">
        <Toolbar>
          <div className="ms-2 d-flex justify-content-center align-items-center Notification-dropdown">
            <div className="d-flex user-detail-main-area">
              <div className="user-img-area">
                <div className="font-awesome-size">
                  <Badge badgeContent={2} color="error" className="notification-badge">
                    <NotificationsActiveIcon style={{ fontSize: '28px', color: '#fff', cursor: 'pointer' }} />
                  </Badge>
                </div>
                <div className="Notification-dropdown-content Notification-dropdown-massege-box-area">
                  <div className="px-2 d-flex align-items-center justify-content-between">
                    <h5 className="p-0 m-0">Notifications</h5>
                    <button className="notification-clear-all-btn">Clear all</button>
                  </div>
                  <Divider className="my-2" style={{ backgroundColor: 'grey' }} />
                  <div>
                    <div>
                      <div className="d-flex p-2 align-items-center justify-content-center">
                        <div>
                          <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Pat-headshot-square.jpg" />
                        </div>
                        <div className="px-2 w-100">
                          <div className="d-flex justify-content-between">
                            <h6 className="p-0 m-0"> vishal  patel</h6>
                            <p className="p-0 m-0 notification-date"> 24 March 2023</p>
                          </div>
                          <div>
                            <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                        </div>
                      </div>
                      <Divider className="my-2" style={{
                        backgroundColor: 'gray',
                        height: ' 1px',
                        opacity: '0.5'
                      }} />
                    </div>
                    <div>
                      <div className="d-flex p-2 align-items-center justify-content-center">
                        <div>
                          <Avatar alt="Remy Sharp" src="https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                        </div>
                        <div className="px-2 w-100">
                          <div className="d-flex justify-content-between">
                            <h6 className="p-0 m-0">Naveen Kumar</h6>
                            <p className="p-0 m-0 notification-date">23 Nov 2022</p>
                          </div>
                          <div>
                            <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                        </div>
                      </div>
                      <Divider style={{
                        backgroundColor: 'gray',
                        height: ' 1px',
                        opacity: '0.5'
                      }} />
                    </div>
                    <div>
                      <div className="d-flex p-2 align-items-center justify-content-center">
                        <div>
                          <Avatar alt="Remy Sharp" src="https://c1.staticflickr.com/5/4007/4626436851_5629a97f30_b.jpg" />
                        </div>
                        <div className="px-2 w-100">
                          <div className="d-flex justify-content-between">
                            <h6 className="p-0 m-0">Himanshu Suratiya</h6>
                            <p className="p-0 m-0 notification-date">15 Aug 2012</p>
                          </div>
                          <div>
                            <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                        </div>
                      </div>
                      <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                    </div>
                  </div>
                  {/* <div className="px-2">
                    <NavLink to="/notification"><button className="notification-view-all-notification-btn">View all Notification</button></NavLink>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }} src="https://mui.com/static/images/avatar/2.jpg"></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <NavLink to="/my-profile" className={`${classes.myAccount}`}>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My Profile
                </MenuItem>
              </NavLink>
              <NavLink to="/my-account" className={`${classes.myAccount}`}>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
              </NavLink>
              <NavLink to="/login" className={`${classes.myAccount}`}>
                <MenuItem onClick={handleLogin}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </NavLink>
            </Menu>
          </>
        </Toolbar>
      </div >
    </AppBar >
  )
}

export default Topbar;