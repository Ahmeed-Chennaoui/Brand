import React from "react"
import './hero.scss'
import { Avatar, CardMedia,CardActionArea, Card, CardContent, CardActions } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {
    Grid,
    Box,
    Typography,
    Button
  } from "@mui/material";
const Hero = ({sx}) => {
    const classes = {
        heroBox:"heroBox",
        gridContainer:"gridContainer",
        title:"title",
        subtitle:"subtitle",
        largeImage:"largeImage",
        card:"card",
        media:"media"
    };
    return (
      <Box sx ={sx} className={classes.heroBox}>
        <Grid 
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        className={classes.gridContainer}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              Brand
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.subtitle}>
                text text.
          </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
              <Button
              variant="contained"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
            >
              voir categories
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Hero;