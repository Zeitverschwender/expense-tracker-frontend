import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";

const filter = createFilterOptions();

const temp = [
  {
    title: "Category 1",
    someOther: "Field",
  },
  {
    title: "Category 2",
    someOther: "Field",
  },
  {
    title: "Category 3",
    someOther: "Field",
  },
  {
    title: "Category 4",
    someOther: "Field",
  },
  {
    title: "Category 5",
    someOther: "Field",
  },
  {
    title: "Category 6",
    someOther: "Field",
  },
  {
    title: "Category 7",
    someOther: "Field",
  },
];

function CategorySelect(props) {
  const [value, setValue] = useState("");

  const onChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setValue("");
    } else if (newValue && newValue.inputValue) {
      alert("WIP, Value: " + newValue.inputValue);
    } else {
      props.setCategory(newValue);
      setValue(newValue);
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
      options={temp}
      classes={{ root: props.gapClassname }}
      renderInput={(params) => (
        <TextField {...params} label="Category" variant="outlined" />
      )}
      value={value}
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
  setCategory: PropTypes.func.isRequired,
  gapClassname: PropTypes.string.isRequired,
};

export default CategorySelect;
