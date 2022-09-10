import React, { useEffect } from "react";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";
import Career from "./pages/career/Career";
import NotFound from "./pages/errors/NotFound";
import MustBeAdmin from "./pages/errors/MustBeAdmin";
import Unauthorized from "./pages/errors/Unauthorized";
import { isEmpty } from "./utils/isEmpty";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalContext } from "./contexts/globalContext";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(window.sessionStorage.getItem("currentUser")) || {}
  );

  useEffect(() => {
    window.sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  const AdminRoute = ({ user, children }) => {
    if (
      isEmpty(user) ||
      user.AccessToken !== process.env.REACT_APP_ADMIN_ACCESS
    ) {
      return <Navigate to="/adminError" replace />;
    }

    return children;
  };
  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser }}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/admin/*"
          element={
            <AdminRoute user={currentUser}>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/career" element={<Career />} />
        <Route path="/authError" element={<Unauthorized />} />
        <Route path="/adminError" element={<MustBeAdmin />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
