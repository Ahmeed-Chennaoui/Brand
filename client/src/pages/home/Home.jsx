import React from 'react'
import JobCategories from '../../components/jobCategories/JobCategories'
import BrandHero from '../../components/BrandHero'
import BrandValues from '../../components/BrandValues'
import Footer from '../../components/footer/footer'




function Home() {
  return (
    <div>
        <BrandHero/>
        <BrandValues/>
        <JobCategories/>
        <Footer/>
    </div>
  )
}

export default Home