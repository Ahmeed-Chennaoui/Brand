import React, { useState } from "react";
import Nav from "../../components/Nav";
import { Box } from "@mui/system";
import Filter from "../../components/Filter";
import SortResults from "../../components/SortResults";
import SearchResults from "../../components/SearchResults";
import {allAnnonce ,villes,categories} from "../../components/allAnnonceData"
import { styled } from "@mui/material";

let availablecategories = new Set();
allAnnonce.forEach((annonce) => availablecategories.add(annonce.categorie));
let availablevilles = new Set();
allAnnonce.forEach((annonce) => availablevilles.add(annonce.locations.ville));

function Search() {
  const [annonce, setannonce] = useState([...allAnnonce]);
  const [filtre, setFiltre] = useState({ville:"",categorie:"",order:"",pricerange:[0,1000]});
  const handleChange = (n : string) =>
  (event: SelectChangeEvent, newValue=[0,1000]) =>{
  if (n!=="pricerange") return setFiltre({...filtre,[n]: event.target.value});
  setFiltre({...filtre,[n]:newValue});
  };
  const handleInput = (event) => {
    if (event.target.name === "min")
      return setFiltre({...filtre,pricerange:[Number(event.target.value), filtre.pricerange[1]]});
    setFiltre({...filtre,pricerange:[filtre.pricerange[0], Number(event.target.value)]});
  };

  const handleOrder = (event) =>{
    switch (event.target.value) {
    case "Popularity":
      setannonce([...annonce]
        .sort((a,b) => a.rating < b.rating ? 1 : -1))
      break;
    case "Price Ascending":
      setannonce([...annonce]
        .sort((a,b) => +a.price.match(/\d+/g) > +b.price.match(/\d+/g) ? 1 : -1))
      break;
      case "Price Descending":
        setannonce([...annonce]
          .sort((a,b) => +a.price.match(/\d+/g) < +b.price.match(/\d+/g) ? 1 : -1))
      break;
    default:break;
    }
  };
  const submitHandler = (event) =>{
    event.preventDefault();
    setFiltre({...filtre,order:""});
    //some ajax fetch request then filter probably
    setannonce(allAnnonce
      .filter( (item) =>
    (
      !filtre.ville || 
      item.locations.ville === filtre.ville
    )
    && 
    (
      !filtre.categorie || 
      item.categorie == filtre.categorie) 
    &&
    (
      ((filtre.pricerange[0] <= +item.price.match(/\d+/g)) 
      && (+item.price.match(/\d+/g) <= filtre.pricerange[1]))
    )
    
    ));
    
  };
  return (
    <div>
      <Nav />
      <SearchContent
      >
        <Filter 
        handleChange={handleChange}
        handleInputChange={handleInput}
        submitHandler={submitHandler}
        categories={Array.from(availablecategories)}
        villes={Array.from(availablevilles)}
        filtre={filtre}
        />
        <div className="right-section" style={{  margin: "auto" }}>
          <SortResults 
          total={annonce.length} 
          handleChange={(event) =>{handleChange("order")(event);handleOrder(event);}} 
          order={filtre.order}/>
          <SearchResults 
          items={annonce}
          />
        </div>
      </SearchContent>
    </div>
  );
}

const SearchContent = styled(Box)(({theme}) =>( {
  marginBottom: "22px",
  marginLeft: "1px",
  display: "flex",
  boxSizing: "border-box",
  width: "96vw",
  margin: "auto",
  marginTop: "50px",
  ".filter-section":{
    Width: "20vw",
  },
  ".right-section":{
    paddingInline: "100px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "1.3rem",
    padding: "0.9rem 0.9rem!important",
    display: "block",
    ".right-section":{
      paddingInline: "0px",
    },
  },
}))
export default Search;
