import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { decode } from "html-entities";
import useAxios from "../hooks/useAxios";
import namespaces from "../namespaces";
import { changeScore } from "../redux/actions";

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, difficulty, type, amount, score } = useSelector(
    (state) => state
  );

  let apiUrl = `/api.php?amount=${amount}`;

  if (category) {
    apiUrl = apiUrl.concat(`&category=${category}`);
  }
  if (difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${difficulty}`);
  }
  if (type && type !== "any") {
    apiUrl = apiUrl.concat(`&type=${type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomIndex(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={15}>
        <CircularProgress color="info" />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(changeScore(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      navigate(`/${namespaces.resultScreenRoute}`, { replace: true });
    }
  };

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response?.results[questionIndex]?.question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  );
};

export default Questions;
