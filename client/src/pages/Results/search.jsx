import React from 'react'
import { styled } from "@mui/material/styles";
import { useState } from 'react'
import SearchFilter from './searchFilter.jsx'
import SearchView from './searchView.jsx'
import SearchResults from './searchResults.jsx'

const annonce = [ 
    {
      id:"1",
      titre:"Carpenter",
      description:"fabricationet réparation de meubles.",
      imgs:[
          "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
      ],
      locations:[{
        ville:"Ariana",
        delegation:[]
      }],
      creationDate: new Date(),
      active:true,
      categorie:"charpentier/charpentière",
      rating:5
    } , {
        id:"2",
        titre:"Carpenter",
        description:"fabricationet réparation de meubles.",
        imgs:[
            "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
        ],
        locations:[{
          ville:"Ariana",
          delegation:[]
        }],
        creationDate: new Date(),
        active:true,
        categorie:"charpentier/charpentière",
        rating:5
    },
]
const villes = [
    "Ariana","Ben Arous","Bizerte","Béja","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","La Manouba","Le Kef","Mahdia","Monastir","Médenine","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"
    ];
const categories =[
      "charpentier/charpentière",
    ]
export default function Search() {
  const [filtre, setFiltre] = useState({ville:"",categorie:""});
  const handleChange = (n : string) =>
  (event: SelectChangeEvent) =>
  setFiltre({...filtre,[n]: event.target.value})
  ;
  const submitHandler = (event) =>{
    event.preventDefault();
    //some ajax fetch request then filter probably
    alert("submited");
  }
  return (
    <SearchContainer>
        <SearchFilter 
        handleChange={handleChange}
        submitHandler={submitHandler}
        categories={categories}
        villes={villes}
        filtre={filtre}
        ></SearchFilter>
        <SearchView></SearchView>
        <SearchResults 
        items={annonce}
        ></SearchResults>
    </SearchContainer>
  )
}
const SearchContainer =styled("div")(({theme}) => ({

}))