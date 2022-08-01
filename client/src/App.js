import Admin from "./pages/admin/Admin";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<div>fuck you</div>} />
      </Routes>
    </div>
  );
}

export default App;
