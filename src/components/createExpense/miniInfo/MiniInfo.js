import React from "react";
import PropTypes from "prop-types";

import { DateTime } from "luxon";

import PaymentMethod from "../../../models/PaymentType";

import CreditCardIcon from "@material-ui/icons/CreditCard";
import dollarOrange from "../../../../src/assets/images/dollar_orange.svg";

import styles from "./MiniInfo.module.scss";

function MiniInfo(props) {
  return (
    <div
      style={{ display: props.isShown ? "none" : "" }}
      className={`${props.gapClassname} ${styles.miniInfo}`}
    >
      {DateTime.fromJSDate(props.date).toLocaleString(DateTime.DATETIME_MED)}
      {props.paymentMethod === PaymentMethod.CASH ? (
        <img src={dollarOrange} alt="dollar orange" />
      ) : (
        <CreditCardIcon color="primary" />
      )}
    </div>
  );
}

MiniInfo.propTypes = {
  isShown: PropTypes.bool.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  gapClassname: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
};

export default MiniInfo;
