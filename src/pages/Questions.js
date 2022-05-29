import { Box, Typography, Button} from "@mui/material";

const Questions = () => {
  const handleClickAnswer = () => {};

  return (
    <Box>
      <Typography variant="h4">Questions </Typography>
      <Typography mt={5}>Questions 2</Typography>

      <Box mt={2}>
        <Button onClick={handleClickAnswer} variant="contained">
          answer
        </Button>
      </Box>

      <Box mt={2}>
        <Button onClick={handleClickAnswer} variant="contained">
          answer
        </Button>
      </Box>

      <Box mt={5}>Score: 1 / 6</Box>
    </Box>
  );
};

export default Questions;
