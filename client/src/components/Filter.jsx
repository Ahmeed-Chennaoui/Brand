import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PriceSlider from "./PriceSlider";
import ChipSelect from "./ChipSelect";
import React from "react";
import RatingMin from "./RatingMin";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { jobs, states } from "../data/filterData";

function Filter() {
  return (
    <div style={{ width: "20vw", minHeight: "calc(100vh -100px)" }}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Filter by price</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <PriceSlider />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Filter by Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RatingMin />
        </AccordionDetails>
      </Accordion>
      <ChipSelect
        optionsArray={jobs}
        label={"Filter by Profession"}
        placeholder="Choose professions"
      />
      <ChipSelect
        optionsArray={states}
        label={"Filter by city"}
        placeholder="Choose cities"
      />
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }}
      >
        <Button variant="contained" size="large">
          Apply filters
        </Button>
      </Box>
    </div>
  );
}

export default Filter;