import { Grid, ListItemSecondaryAction, Paper, Rating, Typography, Link, Box} from "@mui/material"
import { styled } from "@mui/material/styles";
import React from 'react'
export default function searchResults({items,perPage}) {
  return (
    <Paper>
      <AnnonceContainer container 
        rowSpacing={2} 
        columnSpacing={.5}
      >{
        items.map( (el) =>
        <Grid
        item xs={12} sm={3} md={3}
        className="annonce"
        key={el.id}
        >
          
          <Paper className="img-support">
          <Link href="#" color="inherit" underline="none">
            <Box
                    component="img"
                    className="img"
                    src={el.imgs[0]}
                />
          </Link>
          </Paper>
          <Paper className="trdp-support">
          <Link href="#" color="inherit" underline="none">
          <Typography variant="h6" className="title">{el.titre}</Typography>
          <Rating
            value={el.rating}
            readOnly
            className="rating"
          />
          <Typography variant="subtitle2" className="description">
            {(el.description.length<=100 ? el.description : (el.description.substring(0,100))+" ...")}</Typography>
          <Typography variant="h6" className="prix">
            {(el.price && "prix : "+el.price)}</Typography>
          </Link>
          </Paper>
          
        </Grid>

        )
      }
      </AnnonceContainer>
    </Paper>
  )
}
const AnnonceContainer = styled(Grid)(({theme}) => ({
  flexWrap: "wrap",
  marginBottom: "22px",
  marginLeft: "1px",
  display: "flex",
  boxSizing: "border-box",
  ".annonce":{
    margin: "0",
    overflow:"hidden",
    padding: "0",
    borderBottom: "1px solid #e6e6e6",
    maxWidth: "auto",
    maxHeight: "auto",
    display: "block",
    ".img-support":{
        display:"block",
    ".img":{
        verticalAlign: "top",
        height: "200px",
        maxWidth: "302px",
        maxHeight: "200px",
        border:"0",
        
    },},
    ".trdp-support":{
        margin : "0",
        padding: "0",
        overflow:"hidden",
        display: "block",
        ".title":{
            fontSize: "1.5em!important",
            lineHeight: "1.4!important",
            overflow:"hidden",
        },
        ".description":{
            color: "#565959!important",
        },
        ".prix":{
            color:"rgba(255, 0, 0, 0.726)",
            fontWeight: "700",
        },}
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "1.3rem",
    padding: "0.9rem 0.9rem!important",
    display: "block",
    ".annonce":{
      borderBottom: "1px solid #e6e6e6",
      maxWidth: "auto",
      maxHeight: "auto",
      display: "flex",
      ".img-support":{
          marginRight: "6px",
          marginBottom: "16px!important",
          boxSizing: "border-box",
          display:"block",
          minHeight: "110px",
          minWidth: "127.5px",
          paddingLeft: "3px",
      ".img":{
          verticalAlign: "top",
          height: "110px",
          maxWidth: "110px",
          maxHeight: "110px",
          
      },
    },
      ".trdp-support":{
          paddingTop: "0.4rem",
          marginTop: "0!important",
          display:"inline-block",
          lineHeight: "0",
          margin : "0 0 3px",
          paddingRight: "5px",
          boxSizing: "border-box",
          ".title":{
              fontSize: "1.5em!important",
              lineHeight: "1.4!important",
          },
          ".description":{
              color: "#565959!important",
          },
          ".prix":{
              color:"rgba(255, 0, 0, 0.726)",
              fontWeight: "700",
          },
    }
  }
}}))