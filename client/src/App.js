import * as React from "react";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import User from "./pages/user/user";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "./contexts/globalContext";
import { useState } from "react";
 
function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser }}>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search /> }/>
        
        <Route  path="/user" element={<User />} />

        <Route path="/login" element={<Login />} />


        <Route path="/signup" element={<Signup />} />

      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
