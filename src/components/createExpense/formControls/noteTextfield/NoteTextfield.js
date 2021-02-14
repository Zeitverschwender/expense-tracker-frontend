import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function NoteTextfield(props) {
  return (
    <TextField
      id="note-textfield"
      label="Note"
      multiline
      rows={2}
      rowsMax={8}
      placeholder="some note..."
      variant="outlined"
      classes={{ root: props.gapClassname }}
      inputProps={{ maxLength: 520 }}
      onChange={(e) => props.setNote(e.target.value.trim())}
      value={props.value}
    />
  );
}

NoteTextfield.propTypes = {
  value: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default NoteTextfield;
