import * as React from "react";
import Admin from "./pages/admin/Admin";
import Home from "./pages/Home/Home";
import Search from "./pages/Results/search";
import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "./contexts/globalContext";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
