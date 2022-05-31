import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { changeScore, changeAmount } from "../redux/actions";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const backToSettings = () => {
    dispatch(changeScore(0));
    dispatch(changeAmount(10));
    navigate("/");
  };

  return (
    <Box mt={3}>
      <Typography variant="h3" fontWeight="bold" mb={5}>
        You final score: {score}
      </Typography>
      <Button variant="outlined" onClick={backToSettings}>
        Start new quiz
      </Button>
    </Box>
  );
};

export default ResultScreen;
