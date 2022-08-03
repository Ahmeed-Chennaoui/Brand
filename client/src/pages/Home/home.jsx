import React from 'react'
//import { Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar/navbar'
import Hero from '../../components/Hero/hero'
import TheFooter from '../../components/footer/footer'
import Categories from '../../components/Categories/categories'
import {CssBaseline} from '@mui/material';
//import './home.scss'
function home() {
  return (
    <div className='user_container'>
      <CssBaseline />
      <NavBar/>
      <Hero sx={{ width: window.innerWidth ,height: window.innerHeight}}/>
      {/*<Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />*/}
      <Categories/>
      <TheFooter />
    </div>
  )
}

export default home