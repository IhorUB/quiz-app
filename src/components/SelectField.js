import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { changeCategory, changeDifficulty, changeType } from "../redux/actions";
import namespaces from "../namespaces";

export const SelectField = (props) => {
  const { options, label, size } = props;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const targetValue = e.target.value;
    setValue(targetValue);

    switch (label) {
      case namespaces.category:
        dispatch(changeCategory(targetValue));
        break;
      case namespaces.difficulty:
        dispatch(changeDifficulty(targetValue));
        break;
      case namespaces.type:
        dispatch(changeType(targetValue));
        break;
      default:
        return;
    }
  };

  return (
    <Box width="100%" mt={3}>
      <FormControl fullWidth size={size}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          name={label}
          label={label}
          onChange={handleChange}
        >
          {options.map(({ id, name }) => (
            <MenuItem
              key={id}
              value={label === namespaces.category ? id : name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
