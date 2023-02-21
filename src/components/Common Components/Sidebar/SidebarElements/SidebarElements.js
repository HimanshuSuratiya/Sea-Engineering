import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Contact from "../../../pages/Contacts/Contact";
import ProjectsLayout from "../../../pages/Projects/ProjectsLayout";
import ProjectsIndex from "../../../pages/Projects/ProjectsIndex";
import Project from "../../../pages/Projects/Project"
import ProjectProgress from "../../../pages/Projects/ProjectProgress"
import Stock from "../../../pages/Stock/Stock";
import Equipments from "../../../pages/Equipments/Equipments";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import Employees from "../../../pages/Employees/Employees";
import Quotes from "../../../pages/Quotes/Quotes";
import Invoices from "../../../pages/Invoices/Invoices";
import MyProfile from "../../../pages/MyProfile/MyProfile";
import MyAccount from "../../../pages/MyAccount/MyAccount";
import InvoiceDetails from "../../../pages/InvoiceDetails/InvoiceDetails";

const SidebarElements = [
  {
    index: true,
    element: <Dashboard />,
    state: "dashboard"
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "DASHBOARD",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/my-profile",
    element: <MyProfile />,
    state: "MyProfile",
  },
  {
    path: "/my-account",
    element: <MyAccount />,
    state: "MyAccount",
  },
  {
    path: "/invoice-detail",
    element: <InvoiceDetails />,
    state: "InvoiceDetails",
  },
  {
    path: "/projects",
    element: <ProjectsLayout />,
    state: "projects",
    sidebarProps: {
      displayText: "PROJECTS",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <ProjectsIndex />,
        state: "projects.index"
      },
      {
        path: "/projects/project",
        element: <Project />,
        state: "projects.project",
        sidebarProps: {
          displayText: "PROJECT"
        }
      },
      {
        path: "/projects/progress",
        element: <ProjectProgress />,
        state: "projects.progress",
        sidebarProps: {
          displayText: "PROJECT PROGRESS"
        }
      },
    ]
  },
  {
    path: "/contacts",
    element: <Contact />,
    state: "contacts",
    sidebarProps: {
      displayText: "CONTACTS",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/stock",
    element: <Stock />,
    state: "stock",
    sidebarProps: {
      displayText: "STOCK",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/equipments",
    element: <Equipments />,
    state: "equipments",
    sidebarProps: {
      displayText: "EQUIPMENTS",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/employees",
    element: <Employees />,
    state: "employees",
    sidebarProps: {
      displayText: "EMPLOYEES",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/quotes",
    element: <Quotes />,
    state: "quotes",
    sidebarProps: {
      displayText: "QUOTES",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/invoices",
    element: <Invoices />,
    state: "invoices",
    sidebarProps: {
      displayText: "INVOICES",
      icon: <DashboardOutlinedIcon />
    }
  },
]

export default SidebarElements;