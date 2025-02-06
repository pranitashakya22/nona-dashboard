import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setisToggleSidebar] =useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [isHideSidebarandNavbar, setisHideSidebarandNavbar] = useState(false);
  


  const values = {
    isToggleSidebar,
    setisToggleSidebar,
    isLogin,
    setisLogin,
    isHideSidebarandNavbar,
    setisHideSidebarandNavbar

  }


  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      

      {
        isHideSidebarandNavbar !== true &&
        <Header />
      }
      
      <div className="main d-flex">
        {
          isHideSidebarandNavbar !== true &&
          <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
          <Sidebar />
        </div>
        }
        

        <div className={`content ${isHideSidebarandNavbar===true && 'full'} ${isToggleSidebar===true ? 'toggle' : ''}`}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/signUp" exact={true} element={<SignUp />} />
          </Routes>
        </div>
      </div>

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
