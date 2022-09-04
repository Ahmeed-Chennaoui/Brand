
import React from "react";
import JobCategories from "../../components/jobCategories/JobCategories";
import BrandHero from "../../components/BrandHero";
import BrandValues from "../../components/BrandValues";
import Footer from "../../components/Footer";
import { useRef } from 'react'
import { Button } from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import "./home.scss"

function Home() {
  const firstItemRef = useRef(null);
  return (
    <div>

      <BrandHero />
      <div
       className="button" 
       onClick={() => firstItemRef.current.scrollIntoView()}
      >
           <ArrowCircleDownIcon color="disabeled" sx={{ fontSize: 40 }}/>
      </div>
      <BrandValues />
      <div ref={firstItemRef}>
          <JobCategories  />  
      </div>
      <Footer />

    </div>
  );
}

export default Home;
