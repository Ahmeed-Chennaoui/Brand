import React from "react"
import './hero.scss'
import {
    Grid,
    Box,
    Button
  } from "@mui/material";

const Hero = ({sx}) => {
    const classes = {
        heroBox:"hero_box",
        gridContainer:"gridContainer",
        title:"title",
        subtitle:"subtitle",
        largeImage:"largeImage",
        card:"card",
        media:"media"
    };
    return (
      <Box  
      flex={1} overflow="auto"
      className={classes.heroBox}>
        <Grid 
        container
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={8}
        className={classes.gridContainer}>
          <Grid item xs={12} md={3}>
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