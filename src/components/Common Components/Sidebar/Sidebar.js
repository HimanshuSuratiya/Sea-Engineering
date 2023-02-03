import { Drawer, List, Stack, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import SidebarElements from "./SidebarElements/SidebarElements";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import Images from "../../../Images/Images";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      className="sidebar-hide-scroller"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
          fontWeight: '600',
          fontSize: '15px'
        }
      }}
    >
      <List disablePadding>
        <Toolbar>
          <Stack sx={{ width: "100%", marginTop: '10px', marginBottom: '10px' }} direction="row" justifyContent="center">
            <img style={{ height: '100px', width: '50%' }} src={Images.Logo} alt="Logo" />
          </Stack>
        </Toolbar>
        {SidebarElements.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  )
}

export default Sidebar