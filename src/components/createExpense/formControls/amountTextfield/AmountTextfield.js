import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@material-ui/core";

function AmountTextfield(props) {
  const [amountError, setAmountError] = useState(false);

  const onAmountChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setAmountError(!newValue || newValue <= 0);
    props.setAmount(parseFloat(newValue));
  };
  return (
    <TextField
      classes={{ root: props.gapClassname }}
      required
      error={amountError}
      size="small"
      type="number"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      helperText={amountError ? "The Postive Amount you paid" : ""}
      id="new-expense-amount"
      label="Amount"
      variant="outlined"
      autoFocus
      margin="dense"
      onChange={onAmountChange}
    />
  );
}

AmountTextfield.propTypes = {
  setAmount: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default AmountTextfield;
