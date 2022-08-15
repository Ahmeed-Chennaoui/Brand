import React from 'react'
import "./searchResults.scss"
import {
    Grid,
    Paper,
    Typography,
    Box,
    Link
} from '@mui/material'

import Rating from '@mui/material/Rating';

const SearchResults = ({items,perPage}) => {
  return (
    <Paper>
    <Grid 
    className="annonce-container" 
    container 
    rowSpacing={2} 
    columnSpacing={.5}>
    {  
        items.map( (el) =>
            <Grid 
            item xs={12} sm={3} md={3}
            className="annonce"
            key={el.id}
            >   
                <Paper className="img-support">
                <Box
                    component="img"
                    className="img"
                    src={el.imgs[0]}
                />
                </Paper>
                <Paper className="trdp-support">
                <Link href="#" color="inherit" underline="none">
                <Typography className="title">{el.titre}</Typography>
                <Rating
                    value={el.rating}
                    readOnly
                    className="rating"
                />
                <Typography className="description">{(el.description.length<=100 ? el.description : (el.description.substring(0,100))+" ...")}</Typography>
                <Typography className="prix"> {(el.price && "prix : "+el.price)}</Typography>
                </Link></Paper>
                
            </Grid>)
    }
        </Grid>
    </Paper>
  )
}
export default SearchResults