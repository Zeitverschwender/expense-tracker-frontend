import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import PaymentMethod from "../../../../models/PaymentType";

import CreditCardIcon from "@material-ui/icons/CreditCard";

import dollar from "../../../../../src/assets/images/dollar.svg";
import dollarOrange from "../../../../../src/assets/images/dollar_orange.svg";

import styles from "./PaymentMethodRadio.module.scss";

function PaymentMethodRadio(props) {
  return (
    <FormControl
      component="fieldset"
      required
      classes={{ root: `${props.gapClassname} ${styles.radioGroup}` }}
    >
      <FormLabel classes={{ root: styles.hGap }}>Payment Method</FormLabel>
      <RadioGroup
        row
        aria-label="Payment Method"
        name="PaymentMethod"
        defaultValue={props.defaultValue}
        onChange={(e) => props.setPaymentMethod(e.target.value)}
      >
        <FormControlLabel
          value={PaymentMethod.CASH}
          control={
            <Radio
              color="primary"
              icon={<img src={dollar} alt="dollar" style={{ opacity: 0.55 }} />}
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
  );
}

PaymentMethodRadio.propTypes = {
  paymentMethod: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  setPaymentMethod: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default PaymentMethodRadio;
