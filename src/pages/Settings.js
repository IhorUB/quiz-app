import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, Typography, CircularProgress } from "@mui/material";
import { SelectField } from "../components/SelectField";
import { InputField } from "../components/InputField";
import useAxios from "../hooks/useAxios";
import namespaces from "../namespaces";
import { difficultyOptions, typeOptions } from "../api/options";

const Settings = () => {
  const { response, error, loading } = useAxios({
    url: namespaces.categoriesApiUrl,
  });

  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={15}>
        <CircularProgress color="info" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={15}>
        <Typography variant="h6" color="red">
          Something went wrong! {error}
        </Typography>
      </Box>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(namespaces.questionsRoute);
  };

  return (
    <Box>
      <Typography variant="h2" fontWeight="bold">
        Quiz app
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField
          options={response.trivia_categories}
          label={namespaces.category}
          size="small"
        />
        <SelectField
          options={difficultyOptions}
          label={namespaces.difficulty}
          size="small"
        />
        <SelectField
          options={typeOptions}
          label={namespaces.type}
          size="small"
        />
        <InputField
          label={namespaces.questionsAmount}
          type="number"
          size="small"
        />
        <Box width="100%" mt={3}>
          <Button type="submit" variant="contained" fullWidth>
            Get Started
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Settings;
