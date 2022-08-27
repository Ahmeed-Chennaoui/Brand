
import React from "react";
import JobCategories from "../../components/jobCategories/JobCategories";
import BrandHero from "../../components/BrandHero";
import BrandValues from "../../components/BrandValues";
import Footer from "../../components/Footer";
import { useRef } from 'react'
import { Button } from "@mui/material";
import "./home.scss"

function Home() {
  const firstItemRef = useRef(null);
  return (
    <div>

      <BrandHero />
      <div className="button" >
      <Button
              variant="contained"
              size="large"
              sx={{ width: "15vw", maxWidth: "200px", minWidth: "150px" }}
              onClick={() => firstItemRef.current.scrollIntoView()}

       >
              Get started
      </Button>
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
