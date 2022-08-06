import React from 'react'
import NavBar from '../../components/NavBar/Navbar'
import Hero from '../../components/Hero/hero'
import JobCategories from '../../components/jobCategories/JobCategories'
import {CssBaseline, Box} from '@mui/material';
import './home.scss'
function home() {
  return (
    <div className='user_container'>
      <CssBaseline />
      <NavBar/>
      <Box height="100vh" display="flex" flexDirection="column"><Hero /></Box>
      {/*<Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />*/}
      <JobCategories/>
    </div>
  )
}

export default home