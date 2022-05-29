import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectField = (props) => {
  const { options, label, size } = props;
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <Box width="100%" mt={3}>
      <FormControl fullWidth size={size}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem key={id} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
