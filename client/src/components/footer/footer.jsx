import React from "react"
import {
    Box,
    Typography,
    Link
  } from "@mui/material";

const theFooter = () => {
    const classes = {
        footerContainer:"footerContainer",
        footerText:"footerText",
        footerDate:"footerDate"
    };
          
    return (
        <Box 
        sx={{flexGrow: 1}} 
        className={classes.footerContainer}
        >
            <Typography className={classes.footerText}>
                  Provided by{' '}
            <Link href="https://appseed.us" underline="none">
                AppSeed
            </Link>
            </Typography>
            <Typography className={classes.footerDate}>
                Open-Source Sample - Buit with MUI
            </Typography>
        </Box>
    );
  };
  
  export default theFooter;