import React from 'react'
import { styled } from "@mui/material/styles";
import { useState } from 'react'
import SearchFilter from './searchFilter.jsx'
import SearchView from './searchView.jsx'
import SearchResults from './searchResults.jsx'
import Nav from "../../components/Nav"
import {allAnnonce ,villes,categories} from "./allAnnonce"

let availablecategories = new Set();
allAnnonce.forEach((annonce) => availablecategories.add(annonce.categorie));
let availablevilles = new Set();
allAnnonce.forEach((annonce) => availablevilles.add(annonce.locations.ville));

export default function Search() {
  const [annonce, setannonce] = useState([...allAnnonce])
  const [filtre, setFiltre] = useState({ville:"",categorie:"",order:"nouveaux en premier"});
  const handleChange = (n : string) =>
  (event: SelectChangeEvent) =>
  setFiltre({...filtre,[n]: event.target.value});
  ;
  const handleOrder = (event) =>{
    switch (event.target.value) {
    case "nouveaux en premier":
      setannonce([...annonce]
        .sort((a,b) => a.creationDate > b.creationDate ? 1 : -1))
      break;
    case "prix croissant":
      setannonce([...annonce]
        .sort((a,b) => Number(a.price.match(/\d+/g)) > Number(b.price.match(/\d+/g)) ? 1 : -1))
      break;
      case "prix decroissant":
        setannonce([...annonce]
          .sort((a,b) => Number(a.price.match(/\d+/g)) < Number(b.price.match(/\d+/g)) ? 1 : -1))
      break;
    default:break;
    }
  }
  const submitHandler = (event) =>{
    event.preventDefault();
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
    ));
    
  };

  return (
    <div>
    <Nav fixedNavbar="false"/>
    <div style={{flexGrow:"1"}}/>
    <SearchContainer>
        <SearchFilter 
        handleChange={handleChange}
        submitHandler={submitHandler}
        categories={Array.from(availablecategories)}
        villes={Array.from(availablevilles)}
        filtre={filtre}
        ></SearchFilter>
        <SearchView 
        handleChange={(event) =>{handleChange("order")(event);handleOrder(event);}} 
        order={filtre.order}></SearchView>
        <SearchResults 
        items={annonce}
        ></SearchResults>
    </SearchContainer>
    </div>
  )
}
const SearchContainer =styled("div")(({theme}) => ({

}))