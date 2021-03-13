import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function NoteTextfield(props) {
  return (
    <TextField
      id={`${props.label}-textfield`}
      label={`${props.label}`}
      multiline
      rows={2}
      rowsMax={8}
      placeholder={`some ${props.label.toLowerCase()}...`}
      variant="outlined"
      classes={{ root: props.gapClassname }}
      inputProps={{ maxLength: 520 }}
      onChange={(e) => props.setNote(e.target.value.trim())}
      value={props.value}
    />
  );
}

NoteTextfield.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default NoteTextfield;
