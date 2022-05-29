import { Box, FormControl, TextField } from "@mui/material";

export const InputField = (props) => {
  const { label, size, type } = props;

  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size={size}>
        <TextField
          onChange={handleChange}
          variant="outlined"
          label={label}
          type={type}
          size={size}
        />
      </FormControl>
    </Box>
  );
};
