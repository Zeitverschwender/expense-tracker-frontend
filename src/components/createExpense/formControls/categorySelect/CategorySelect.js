import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";

const filter = createFilterOptions();
function CategorySelect(props) {
  const categories = useSelector((state) =>
    Object.values(state.categories.categories)
  );

  const onChange = (event, newValue) => {
    if (typeof newValue === "string") {
      props.setCategory("");
    } else if (newValue && newValue.inputValue) {
      alert("WIP, Value: " + newValue.inputValue);
    } else {
      props.setCategory(newValue || "");
    }
  };
  const getFilteredOptions = (options, params) => {
    const filtered = filter(options, params);
    if (params.inputValue !== "") {
      filtered.push({
        inputValue: params.inputValue,
        title: `Create Category "${params.inputValue}"?`,
      });
    }
    return filtered;
  };
  return (
    <Autocomplete
      id="category-select"
      options={categories}
      classes={{ root: props.gapClassname }}
      renderInput={(params) => (
        <TextField {...params} label="Category" variant="outlined" />
      )}
      value={props.value}
      onChange={onChange}
      filterOptions={getFilteredOptions}
      getOptionLabel={(option) => {
        return option.inputValue || option.title || option;
      }}
      renderOption={(option) => option.title}
      size="small"
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
    />
  );
}

CategorySelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  setCategory: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default CategorySelect;
