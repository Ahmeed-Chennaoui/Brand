import React from 'react'
import {
  Paper,
  Button,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

const SearchFilter = ({handleChange,submitHandler,categories,villes,filtre}) => {
  return (
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

          <InputLabel id="cat">categorie:</InputLabel>
          <Select
          labelid="cat"
          id="selectcat"
          value={filtre.categorie}
          onChange={handleChange("categorie")}
        >
          <MenuItem aria-label="Aucune" value= "">Aucune</MenuItem>
          {categories.map((name,index) =>
            <MenuItem key={index} value={name}>{name}</MenuItem>
            
          )}
        </Select>
          <InputLabel id="ville"><LocationOnIcon/>ville:</InputLabel>
          <Select
          labelid="ville"
          id="selectville"
          value={filtre.ville}
          onChange={handleChange("ville")}
        >
          <MenuItem aria-label="Aucune" value= "">Aucune</MenuItem>
          {villes.map((name) =>
            <MenuItem key={name} value={name}>{name}</MenuItem>
            
          )}
        </Select>
          <Button type="submit" variant="contained" > <SearchIcon fontSize="small"/>filtrer</Button>
          </Box>
        </Paper>
  )
}
export default SearchFilter