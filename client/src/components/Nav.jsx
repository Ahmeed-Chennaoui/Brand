import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import PageviewIcon from '@mui/icons-material/Pageview';
import HomeIcon from '@mui/icons-material/Home';
import "./Nav.scss"
import {useNavigate} from 'react-router-dom';

const demoUser = {
  name: "Karim Hmidi",
  email: "karim.hmidi@ensi-uma.tn",
};

function Nav({ fixedNavbar }) {
  const { loggedIn, setLoggedIn } = useContext(GlobalContext);
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }
  const navigate = useNavigate();
  const navigatesearch = () => {
    // 👇️ navigate to /
    navigate('/search');
  };
  return (
    <HeroNav fixed={fixedNavbar}>
      <table>
        <tr>
          
          <th><a href="http://localhost:5000/">
              <Typography variant="h2" className="logo" fontWeight="bold" onKeyPress={handleKeyPress}>
                Brand
              </Typography></a>
          </th>
        </tr>
      </table>
      
      <div style={{marginLeft:"15%"}}>
      <table>
        <tr>
          <th style={{size:"large"}}><a href="http://localhost:5000/search"><PageviewIcon sx={{ color: "brown" }}/></a></th>
          <th><Searchbar fixedNavbar={fixedNavbar} onKeyPress={e => e.key === 'Enter' &&navigatesearch}/></th>
        </tr>
      </table>
      </div>
      {!loggedIn && (
        <div className="connection">
          <Button
            variant="outlined"
            color="info"
            sx={{ fontWeight: "bold" }}
            size="large"
            onClick={() => setLoggedIn(true)}
          >
            Login
          </Button>
          <Button variant="contained" size="large">
            Signup
          </Button>
        </div>
      )}
      {loggedIn && (
        <div
          style={{
            minWidth: "125px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NotificationMenu />
          <ProfileMenu demoUser={demoUser}   />
        </div>
      )}
    </HeroNav>
  );
}

const HeroNav = styled(Box, { shouldForwardProp: (prop) => prop !== "fixed" })(
  ({ theme, fixed }) => ({
    position: fixed ? "fixed" : "sticky",
    top: 0,
    display: "flex",
    zIndex: 2,
    justifyContent: "space-between",
    height: "75px",
    width: "100%",
    paddingRight: "3vw",
    paddingLeft: "3vw",
    color: "white",
    backgroundColor: fixed ? "#FFFFFF" : "none",
    borderBottom: fixed ? "1px rgba(0,0,0,.5) solid" : "none",
    alignItems: "center",
    transition: theme.transitions.create(["all"]),

    ".MuiFilledInput-root": {
      width: "30vw",
    },
    "& .logo": {
      color: "#6439ff",
    },
    "& .MuiButton-outlined": {
      borderWidth: "2px",
    },
    [theme.breakpoints.down("md")]: {
      "& .logo": {
        fontSize: "calc(30vw/4)",
      },
      "& .connection": {
        display: "none",
      },
      ".MuiFilledInput-root": {
        width: "calc(70vw - 125px)",
      },
    },
  })
);

export default Nav;
