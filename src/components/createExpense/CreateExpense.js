import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";

import styles from "./CreateExpense.module.scss";

const CreateExpense = React.forwardRef((props, ref) => {
  const [date, setDate] = useState(new Date());
  return (
    <form className={styles.wrapper} autoComplete="off" ref={ref}>
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
});

export default CreateExpense;
