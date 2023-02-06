import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { SidebarList } from "./components/Common Components/Sidebar/SidebarElements/GenerateRoute";

function App() {
  return (
    <BrowserRouter basename="/design_website/See-engineering">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {SidebarList}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App