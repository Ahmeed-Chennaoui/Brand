import React from 'react'
import { 
  useSelector, 
  //useDispatch 
} from 'react-redux';
import NavBar from '../../components/NavBar/Navbar'
import {
  Paper,
  CssBaseline,
  SelectChangeEvent
} from '@mui/material';
import {
  selectAnnonce,
} from '../../features/Annonces/annonceSlice';
import SearchFilter from './searchFilter/searchFilter'
import SearchOrder from './searchOrder/searchOrder'
import SearchResults from './searchResults/searchResults'
const villes = [
"Ariana","Ben Arous","Bizerte","Béja","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","La Manouba","Le Kef","Mahdia","Monastir","Médenine","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"
];
const categories =[
  "charpentier/charpentière",
]
function Results() {
  const annonce = useSelector(selectAnnonce);

  const [filtre, setFiltre] = React.useState({ville:"",categorie:""});
  const handleChange = (n : string) =>
  (event: SelectChangeEvent) =>
  setFiltre({...filtre,[n]: event.target.value})
  ;
  const submitHandler = (event) =>{
    event.preventDefault();
    //some ajax fetch request then filter probably
    alert("submited");
  }
  /*const orderBy =
  (event: SelectChangeEvent) =>{
    switch (event.target.value){
      case "prix_croissant":
      break;
      case "prix_decroissant":
      break;
    }
  }*/
  return (
    <div className="user_container">
      <CssBaseline />
      <NavBar/>
      <div style={{flexGrow:"1"}}/>
      <Paper className="search_section">
        <SearchFilter
        handleChange={handleChange}
        submitHandler={submitHandler}
        categories={categories}
        villes={villes}
        filtre={filtre}
        />
        
        {/*<SearchOrder 
        orderBy={orderBy}
        />*/}
        <SearchResults items={annonce}
        />
      </Paper>
      </div>
  )
}

export default Results