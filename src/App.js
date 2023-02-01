import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/layout/MainLayout";
import { SidebarList } from "./Components/Common Components/Sidebar/SidebarElements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {SidebarList}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App