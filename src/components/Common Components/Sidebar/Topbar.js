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
      <Toolbar>
        <div className="d-flex align-items-center justify-content-end w-100">
          <div class="notification">
            <a href="#">
              <div class="notBtn" href="#">
                <Badge badgeContent={2} color="error" className="notification-badge">
                  <NotificationsActiveIcon className={`${classes.notificationStyle}`} />
                </Badge>
                <div class="box">
                  <div class="display">
                    <div class="cont">
                      <div class="sec new">
                        <a href="">
                          <img class="profile" src="https://c1.staticflickr.com/5/4007/4626436851_5629a97f30_b.jpg" />
                          <div class="txt">James liked your post: "Pure css notification box"</div>
                          <div class="txt sub">11/7 - 2:30 pm</div>
                        </a>
                      </div>
                      <div class="sec new">
                        <a href="">
                          <img class="profile" src="https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                          <div class="txt">Annita liked your post: "Pure css notification box"</div>
                          <div class="txt sub">11/7 - 2:13 pm</div>
                        </a>
                      </div>

                      <div class="sec">
                        <a href="">
                          <img class="profile" src="https://c1.staticflickr.com/4/3725/10214643804_75c0b6eeab_b.jpg" />
                          <div class="txt">Madison liked your post: "Pure css notification box"</div>
                          <div class="txt sub">11/6 - 4:04 pm</div>
                        </a>
                      </div>
                      <div class="sec">
                        <a href="">
                          <img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/5/52/NG_headshot_white_shirt_square_Jan18.jpg" />
                          <div class="txt">Ted liked your post: "Pure css notification box"</div>
                          <div class="txt sub">11/6 - 10:37 am</div>
                        </a>
                      </div>
                      <div class="sec">
                        <a href="">
                          <img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Pat-headshot-square.jpg" />
                          <div class="txt">Tommas liked your post: "Pure css notification box"</div>
                          <div class="txt sub">11/5 - 7:30 pm</div>
                        </a>
                      </div>

                      <div class="sec">
                        <a href="">
                          <img class="profile" src="//c1.staticflickr.com/1/185/440890151_54c5b920b0_b.jpg" />
                          <div class="txt">Jerimaiah liked your post: "Pure css notification box"</div>
                          <div class="txt sub">11/5 - 1:34 pm</div>
                        </a>
                      </div>
                      <div class="sec">
                        <a href=" ">
                          <img class="profile" src="//c2.staticflickr.com/4/3397/3585544855_28442029a5_z.jpg?zz=1" />
                          <div class="txt">Debra liked your post: "Pure css notification box"</div>
                          <div class="txt sub">11/5 - 10:20 am</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;