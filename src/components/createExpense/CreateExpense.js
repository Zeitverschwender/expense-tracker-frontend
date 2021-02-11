import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";

import styles from "./CreateExpense.module.scss";

export default function CreateExpense() {
  return (
    <form className={styles.wrapper}>
      <TextField
        required
        error={false}
        size="small"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        helperText="The Postive Amount you paid"
        id="new-expense-amount"
        label="Amount"
        variant="outlined"
        autoFocus
      />
    </form>
  );
}
