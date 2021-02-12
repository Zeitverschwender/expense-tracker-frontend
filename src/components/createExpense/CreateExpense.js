import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./CreateExpense.module.scss";
import PaymentMethod from "../../models/PaymentType";

import dollar from "../../../src/assets/images/dollar.svg";
import dollarOrange from "../../../src/assets/images/dollar_orange.svg";

const CreateExpense = React.forwardRef((props, ref) => {
  const [date, setDate] = useState(new Date());
  const [amountError, setAmountError] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isMoreInfoShown, setIsMoreInfoShown] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethod.CASH);

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
      <div
        style={{ display: isMoreInfoShown ? "" : "none" }}
        className={styles.moreInfo}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            label="When"
            classes={{ root: styles.gap }}
            inputVariant="outlined"
            value={date}
            onChange={setDate}
            showTodayButton
            disableFuture
            autoOk
            required
          />
        </MuiPickersUtilsProvider>
        <FormControl
          component="fieldset"
          required
          classes={{ root: styles.radioGroup }}
        >
          <FormLabel classes={{ root: styles.hGap }}>Payment Method</FormLabel>
          <RadioGroup
            row
            aria-label="Payment Method"
            name="PaymentMethod"
            defaultValue={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value={PaymentMethod.CASH}
              control={
                <Radio
                  color="primary"
                  icon={
                    <img src={dollar} alt="dollar" style={{ opacity: 0.55 }} />
                  }
                  checkedIcon={<img src={dollarOrange} alt="dollar orange" />}
                />
              }
              labelPlacement="end"
            />
            <FormControlLabel
              value={PaymentMethod.CREDIT}
              control={
                <Radio
                  color="primary"
                  icon={<CreditCardIcon />}
                  checkedIcon={<CreditCardIcon color="primary" />}
                />
              }
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <ButtonGroup
        classes={{ root: styles.buttonGroup }}
        color="primary"
        aria-label="create expense button group"
      >
        <Button aria-label="Create">Create</Button>
        <Button
          aria-label="More Info"
          onClick={() => setIsMoreInfoShown(!isMoreInfoShown)}
        >
          {isMoreInfoShown ? (
            <ExpandLessOutlinedIcon />
          ) : (
            <ExpandMoreOutlinedIcon />
          )}
        </Button>
        <Button aria-label="Close" onClick={props.close}>
          <CloseSharpIcon />
        </Button>
      </ButtonGroup>
    </form>
  );
});
CreateExpense.propTypes = {
  close: PropTypes.func.isRequired,
};

export default CreateExpense;
