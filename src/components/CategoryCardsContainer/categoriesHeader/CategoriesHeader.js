import React from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import styles from "./CategoriesHeader.module.scss";

function CategoriesHeader(props) {
  return (
    <div className={styles.categoriesHeader}>
      <h2>Categories</h2>
      <div className={styles.headerIcons}>
        <IconButton
          aria-label="add"
          onClick={props.showCreate}
          classes={{ root: styles.icons }}
          color="inherit"
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default CategoriesHeader;
