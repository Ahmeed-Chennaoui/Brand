import * as React from "react";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
