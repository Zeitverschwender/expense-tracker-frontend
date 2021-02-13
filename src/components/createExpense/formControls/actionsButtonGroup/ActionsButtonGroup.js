import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "@material-ui/core";

import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

function ActionsButtonGroup(props) {
  return (
    <ButtonGroup
      classes={{ root: props.buttonGroupClassname }}
      color="primary"
      aria-label="create expense button group"
    >
      <Button
        aria-label="Create"
        onClick={props.onCreate}
        disabled={props.isCreateDisabled}
      >
        Create
      </Button>
      <Button
        aria-label="More Info"
        onClick={() => props.setIsMoreInfoShown(!props.isMoreInfoShown)}
      >
        {props.isMoreInfoShown ? (
          <ExpandLessOutlinedIcon />
        ) : (
          <ExpandMoreOutlinedIcon />
        )}
      </Button>
      <Button aria-label="Close" onClick={props.close}>
        <CloseSharpIcon />
      </Button>
    </ButtonGroup>
  );
}

ActionsButtonGroup.propTypes = {
  onCreate: PropTypes.func.isRequired,
  isCreateDisabled: PropTypes.bool.isRequired,
  isMoreInfoShown: PropTypes.bool.isRequired,
  setIsMoreInfoShown: PropTypes.func.isRequired,
  buttonGroupClassname: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default ActionsButtonGroup;
