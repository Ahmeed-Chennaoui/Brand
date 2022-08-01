import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar'
import './Admin.scss'
function Admin() {
  return (
    <div className='admin_container'>
      <Sidebar/>
      <Routes>
        <Route path='' element={<div className='contents'>container</div>}/>
        <Route path="dashboard" element={<div className='contents'>dashboard</div>}/>
      </Routes>
      
       
      
    </div>
  )
}

export default Admin