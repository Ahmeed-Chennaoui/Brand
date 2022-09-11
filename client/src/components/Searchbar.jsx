import React from "react";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const jobs = [
  { title: "Plumber" },
  { title: "Carpenter" },
  { title: "Blacksmith" },
  { title: "Painter" },
  { title: "Mason worker" },
  { title: "Electrician" },
  { title: "Mecanic" },
  { title: "Cleaning" },
  { title: "Gardner" },
];

const SearchContainer = styled(Autocomplete, {
  shouldForwardProp: (prop) => prop !== "fixed" || prop !== "sticky",
})(({ theme, fixed, sticky }) => ({
  "& .MuiAutocomplete-input": {
    color: fixed || sticky ? "black" : "white",
    textShadow: fixed || sticky ? "none" : "black 0px 0px 2px",
    fontSize: "1.35em",
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  "& .MuiInputLabel-filled:not(.MuiInputLabel-shrink)": {
    color: fixed || sticky ? "black" : "white",
    textShadow: fixed || sticky ? "none" : "black 0px 0px 2px",
    fontSize: "26px",
    fontWeight: "300",
    letterSpacing: 1,
  },
  "& .MuiInputLabel-shrink": {
    fontSize: "20px",
    fontWeight: "bold",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "rgba(255,255,255,0)",
  },

  [theme.breakpoints.down("md")]: {
    "& .MuiAutocomplete-input": {
      fontSize: "1em",
    },
  },
}));
function Searchbar({ fixedNavbar, sticky }) {
  const navigate = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/search");
    }
  };
  return (
    <SearchContainer
      fixed={fixedNavbar}
      sticky={sticky}
      freeSolo
      onKeyPress={handleKeyPress}
      options={jobs.map((job) => job.title)}
      renderInput={(params) => {
        return (
          <TextField {...params} label="Search" variant="filled" fullWidth />
        );
      }}
    />
  );
}

export default Searchbar;
