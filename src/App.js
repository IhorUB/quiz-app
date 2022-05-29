import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import ResultScreen from "./pages/ResultScreen";
import namespaces from "./namespaces";

export default function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings />} exact />
            <Route path={namespaces.questionsRoute} element={<Questions />} />
            <Route
              path={namespaces.resultScreenRoute}
              element={<ResultScreen />}
            />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}
