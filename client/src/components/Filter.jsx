import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PriceSlider from "./PriceSlider";
import ChipSelect from "./ChipSelect";
import React, { useContext, useEffect, useState } from "react";
import RatingMin from "./RatingMin";
import ClearIcon from "@mui/icons-material/Clear";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { jobs, states } from "../data/filterData";
import { isEmpty } from "../utils/isEmpty";
import { SearchContext } from "../contexts/searchContext";

function Filter({ setFilter, filter }) {
  const { maxPrice, navigationOption } = useContext(SearchContext);
  const [rating, setRating] = useState(3);
  const [noRating, setNoRating] = useState(true);
  const [priceRange, setPriceRange] = useState([0, maxPrice]);
  const [professions, setProfessions] = useState([]);
  const [cities, setCities] = useState([]);

  const handleFilterApply = () => {
    const filter = {
      rating,
      priceRange,
      professions,
      cities,
      noRating,
    };
    setFilter(filter);
  };
  const handleNoRating = (event) => {
    setNoRating(event.target.checked);
  };
  const handleNavigation = () => {
    const filter = {
      rating: -1,
      priceRange: [0, process.env.REACT_APP_MAX_PRICE],
      professions: [navigationOption],
      cities,
      noRating,
    };
    setProfessions([navigationOption]);
    setFilter(filter);
  };
  useEffect(() => {
    if (navigationOption) handleNavigation();
  }, []);
  return (
    <div
      style={{
        width: "300px",
        minHeight: "calc(100vh -100px)",
        margin: "10px",
      }}
    >
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Filter by price</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <PriceSlider
            value={priceRange}
            setValue={setPriceRange}
            max={maxPrice}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Filter by Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RatingMin setValue={setRating} value={rating} />
          <FormControlLabel
            value={noRating}
            sx={{ mt: 2 }}
            control={
              <Checkbox
                checked={noRating}
                onChange={handleNoRating}
                color="info"
              />
            }
            label="Show non rated users"
          />
        </AccordionDetails>
      </Accordion>
      <ChipSelect
        optionsArray={jobs}
        value={professions}
        setValue={setProfessions}
        label={"Filter by Profession"}
        placeholder="Choose professions"
      />
      <ChipSelect
        optionsArray={states}
        value={cities}
        setValue={setCities}
        label={"Filter by city"}
        placeholder="Choose cities"
      />
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }}
      >
        <Button variant="contained" size="large" onClick={handleFilterApply}>
          Apply filters
        </Button>
      </Box>
      {!isEmpty(filter) && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 1,
          }}
        >
          <Button
            variant="outlined"
            color="error"
            startIcon={<ClearIcon />}
            onClick={() => {
              setRating(0);
              setNoRating(true);
              setProfessions([]);
              setPriceRange([0, maxPrice]);
              setCities([]);
              setFilter({});
            }}
          >
            Clear
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Filter;
