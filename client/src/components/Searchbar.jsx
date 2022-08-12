import React from 'react'
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    }]



const SearchContainer = styled(Autocomplete)(({theme})=>({
   
    "& .MuiAutocomplete-input":{
        color:'black',
        fontSize:'1.35em',
        transition : theme.transitions.create(['all'],{
            duration:theme.transitions.duration.shortest
        }),

    },
    "& .MuiInputLabel-filled:not(.MuiInputLabel-shrink)": {
        color:'black',
        fontSize:"20px",
        textShadow:'white 0px 0px 3px'
    

      },
      "& .MuiInputLabel-shrink":{
        fontSize:'20px',
        fontWeight:'bold',
        

      },
    "& .MuiFilledInput-root":{
        
        backgroundColor:'rgba(255,255,255,0.15)'
    },
    "&.MuiAutocomplete-inputFocused":{
        backgroundColor:'white',
   

        },
    [theme.breakpoints.down('md')]:{
        "& .MuiAutocomplete-input":{
            fontSize:'1em'
        }
    }
}))
function Searchbar() {
  return (
    
    <SearchContainer 
    freeSolo
    options={top100Films}
    getOptionLabel={(option) => option.title}
    renderInput={(params) => {
      return (
        <TextField
          {...params}
          label="Search"
         variant='filled'
          fullWidth
          
        />
      );
    }}/>
    
  )
}

export default Searchbar