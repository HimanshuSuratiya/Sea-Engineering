import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ContactsPage1 from "../../../pages/Contacts/ContactsPage1";
import ContactsPage2 from "../../../pages/Contacts/ContactsPage2";
import ProjectsLayout from "../../../pages/Projects/ProjectsLayout";
import ProjectsIndex from "../../../pages/Projects/ProjectsIndex";
import ProjectsPage1 from "../../../pages/Projects/ProjectsPage1"
import ProjectsPage2 from "../../../pages/Projects/ProjectsPage2"
import ContactsLayout from "../../../pages/Contacts/ContactsLayout";
import Stock from "../../../pages/Stock/Stock";
import Equipments from "../../../pages/Equipments/Equipments";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import Employees from "../../../pages/Employees/Employees";
import Quotes from "../../../pages/Quotes/Quotes";
import Invoices from "../../../pages/Invoices/Invoices";

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
        path: "/projects/page1",
        element: <ProjectsPage1 />,
        state: "projects.page1",
        sidebarProps: {
          displayText: "PROJECT PAGE-1"
        }
      },
      {
        path: "/projects/page2",
        element: <ProjectsPage2 />,
        state: "projects.page2",
        sidebarProps: {
          displayText: "PROJECT PAGE-2"
        }
      },
    ]
  },
  {
    path: "/contacts",
    element: <ContactsLayout />,
    state: "contacts",
    sidebarProps: {
      displayText: "CONTACTS",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/contacts/page1",
        element: <ContactsPage1 />,
        state: "contacts.page1",
        sidebarProps: {
          displayText: "CONTACTS PAGE-1"
        }
      },
      {
        path: "/contacts/page2",
        element: <ContactsPage2 />,
        state: "contacts.page2",
        sidebarProps: {
          displayText: "CONTACTS PAGE-2"
        }
      }
    ]
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