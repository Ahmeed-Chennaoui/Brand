import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../components/NavBar/Navbar'
import {
  Paper,
  CssBaseline,
  Button,
  Box,
  TextField,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem 
} from '@mui/material';
import {
  selectAnnonce,
} from '../../features/Annonces/annonceSlice';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

const villes = [
"","Ariana","Ben Arous","Bizerte","Béja","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","La Manouba","Le Kef","Mahdia","Monastir","Médenine","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"
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
  return (
    <div className="user_container">
      <CssBaseline />
      <NavBar/>
      <div style={{flexGrow:"1"}}/>
      <Paper className="search_section">

        <Paper className="search_filters">
        <Box
          component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            onSubmit={submitHandler}
          >
          <TextField label="Rechercher" type="search" />
          <InputLabel ><LocationOnIcon/>categorie:</InputLabel>
          <Select
          value={filtre.categorie}
          onChange={handleChange("categorie")}
        >
          {categories.map((name) => 
            <MenuItem value={name}>{name}</MenuItem>
          )}
        </Select>
          <InputLabel ><LocationOnIcon/>ville:</InputLabel>
          <Select
          value={filtre.ville}
          onChange={handleChange("ville")}
        >
          {villes.map((name) => 
            <MenuItem value={name}>{name}</MenuItem>
          )}
        </Select>
          <Button type="submit" variant="contained" > <SearchIcon fontSize="small"/>filtrer</Button>
          </Box>
        </Paper>
        <Paper className="search_order">
            
        </Paper>
        <Paper className="search_results">

        </Paper>
      </Paper>
      </div>
  )
}

export default Results