import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to="/quiz">
      <Button variant="outlined">Start Quiz</Button>
    </Link>
  );
}

export default Home;
