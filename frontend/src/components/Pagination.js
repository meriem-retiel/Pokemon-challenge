import React from "react";
import { Button, ButtonGroup } from "@mui/material";
const Pagination = ({ handleNextClick, handlePreviousClick }) => {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button onClick={handlePreviousClick}>Previous</Button>
      <Button onClick={handleNextClick}>Next</Button>
    </ButtonGroup>
  );
};

export default Pagination;
