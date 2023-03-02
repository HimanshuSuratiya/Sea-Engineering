import Contact from "../../../pages/Contacts/Contact";
import Project from "../../../pages/Projects/Project"
import Stock from "../../../pages/Stock/Stock";
import Equipments from "../../../pages/Equipments/Equipments";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import Employees from "../../../pages/Employees/Employees";
import Quotes from "../../../pages/Quotes/Quotes";
import Invoices from "../../../pages/Invoices/Invoices";
import MyProfile from "../../../pages/MyProfile/MyProfile";
import MyAccount from "../../../pages/MyAccount/MyAccount";
import InvoiceDetails from "../../../pages/InvoiceDetails/InvoiceDetails";
import GroupsIcon from '@mui/icons-material/Groups';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Notification from "../../../pages/Notification/Notification";
import TaskIcon from '@mui/icons-material/Task';
import ContactsIcon from '@mui/icons-material/Contacts';
import Task from "../../../pages/Task/Task";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Client_Contact from "../../../pages/Client_Contact/Client_Contact";
import View_project from "../../../pages/View_project/View_project";
import Add_member from "../../../pages/Add_member/Add_member";
import TaskSummary from "../../../pages/TaskSummary/TaskSummary";

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
      icon: <DashboardIcon />
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
    path: "/view_project",
    element: < View_project />,
    state: "View_project",
  },
  // {
  //   path: "/projects",
  //   element: <ProjectsLayout />,
  //   state: "projects",
  //   sidebarProps: {
  //     displayText: "  PROJECTS",
  //     icon: <WorkspacePremiumIcon />
  //   },
  //   child: [
  //     {
  //       index: true,
  //       element: <ProjectsIndex />,
  //       state: "projects.index"
  //     },
  //     {
  //       path: "/projects/all-project",
  //       element: <Project />,
  //       state: "projects.project",
  //       sidebarProps: {
  //         displayText: " ALL PROJECT"
  //       }
  //     },
  //     {
  //       path: "/projects/all-task",
  //       element: <ProjectProgress />,
  //       state: "projects.progress",
  //       sidebarProps: {
  //         displayText: "All TASKS"
  //       }
  //     },
  //   ]
  // },
  {
    path: "all-project",
    element: <Project />,
    state: "all project",
    sidebarProps: {
      displayText: "All Projects",
      icon: <WorkspacePremiumIcon />
    }
  },
  {
    path: "/add-member",
    element: <Add_member />,
    state: "add-member",
  },
  {
    path: "/task-summary",
    element: <TaskSummary />,
    state: "task-summary",
  },
  {
    path: "/contacts",
    element: <Contact />,
    state: "contacts",
    sidebarProps: {
      displayText: "CONTACTS",
      icon: <ContactsIcon />
    }
  },
  {
    path: "/stock",
    element: <Stock />,
    state: "stock",
    sidebarProps: {
      displayText: "STOCK",
      icon: <ShowChartIcon />
    }
  },
  {
    path: "/equipments",
    element: <Equipments />,
    state: "equipments",
    sidebarProps: {
      displayText: "EQUIPMENTS",
      icon: <ConstructionIcon />
    }
  },
  {
    path: "/employees",
    element: <Employees />,
    state: "employees",
    sidebarProps: {
      displayText: "EMPLOYEES",
      icon: <GroupsIcon />
    }
  },
  {
    path: "/quotes",
    element: <Quotes />,
    state: "quotes",
    sidebarProps: {
      displayText: "QUOTES",
      icon: <FormatQuoteIcon />
    }
  },
  {
    path: "/invoices",
    element: <Invoices />,
    state: "invoices",
    sidebarProps: {
      displayText: "INVOICES",
      icon: <ReceiptIcon />
    }
  },
  {
    path: "/notification",
    element: <Notification />,
    state: "notification",
    sidebarProps: {
      displayText: "NOTIFICATION",
      icon: <NotificationsActiveIcon />
    }
  },
  {
    path: "/task",
    element: <Task />,
    state: "task",
    sidebarProps: {
      displayText: "TASK",
      icon: <TaskIcon />
    }
  },
  {
    path: "/Client_Contact",
    element: <Client_Contact />,
    state: "Client_Contact",
    sidebarProps: {
      displayText: "Client and Contact",
      icon: <PeopleAltIcon />
    }
  },

]

export default SidebarElements;