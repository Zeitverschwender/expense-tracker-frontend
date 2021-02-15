import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function TitleTextfield(props) {
  const onAmountChange = (e) => {
    e.preventDefault();
    props.setValue(e.target.value || "");
  };
  return (
    <TextField
      classes={{ root: props.gapClassname }}
      required
      size="small"
      id="new-category-title"
      label="Title"
      variant="outlined"
      autoFocus
      margin="dense"
      onChange={onAmountChange}
      value={props.value}
      inputProps={{ maxLength: 128 }}
    />
  );
}

TitleTextfield.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default TitleTextfield;
