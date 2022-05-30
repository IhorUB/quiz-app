import { Box, FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeAmount } from "../redux/actions";

export const InputField = (props) => {
  const { label, size, type } = props;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeAmount(e.target.value));
  };

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
