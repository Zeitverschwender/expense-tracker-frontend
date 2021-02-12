import React from "react";
import PropTypes from "prop-types";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DatePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        label="When"
        classes={{ root: props.gapClassname }}
        inputVariant="outlined"
        value={props.date}
        onChange={props.setDate}
        showTodayButton
        disableFuture
        autoOk
        required
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default DatePicker;
