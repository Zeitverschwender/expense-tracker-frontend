import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../../store/actions/index";

const filter = createFilterOptions();
function CategorySelect(props) {
  const [value, setValue] = useState("");

  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const onGetAllCategories = useCallback(
    () => dispatch(getAllCategories()),
    []
  );
  useEffect(() => {
    onGetAllCategories();
  }, [onGetAllCategories]);

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
      options={categories}
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
