import {
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

import styles from "./CreateExpense.module.scss";

const CreateExpense = React.forwardRef((props, ref) => {
  const [date, setDate] = useState(new Date());
  const [amountError, setAmountError] = useState(false);
  const [amount, setAmount] = useState(0);

  const onAmountChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setAmountError(!newValue || newValue <= 0);
    setAmount(parseFloat(newValue));
  };
  return (
    <form className={styles.wrapper} autoComplete="off" ref={ref}>
      <TextField
        classes={{ root: styles.gap }}
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
    </form>
  );
});

export default CreateExpense;
