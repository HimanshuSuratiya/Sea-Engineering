import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { SidebarList } from "./components/Common Components/Sidebar/SidebarElements/GenerateRoute";
import Login from "./components/pages/Login/Login";
import ForgetPassword from "./components/pages/Forget Password/ForgetPassword";
import Register from "./components/pages/Register/Register";

function App() {
  useEffect(() => {
    const LoginData = { email: 'himanshu@gmail.com', password: '12345@' }
    if (localStorage.getItem('isLoginType') === null) {
      localStorage.setItem('isLoginType', 0)
    } else {
      if (localStorage.getItem('isLoginType') === 0) {
        localStorage.setItem('isLoginType', 0)
      } else if (localStorage.getItem('isLoginType') === 1) {
        localStorage.setItem('isLoginType', 1)
      }
    }
    localStorage.setItem('LoginData', JSON.stringify(LoginData));
    console.log(parseInt(localStorage.getItem('isLoginType')), 'sss')
  }, [])

  return (
    <BrowserRouter basename="/design_website/See-engineering">
      {parseInt(localStorage.getItem('isLoginType')) ?
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {SidebarList}
          </Route>
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      }
    </BrowserRouter>
  )
}

export default App