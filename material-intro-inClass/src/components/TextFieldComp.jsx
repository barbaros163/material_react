import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/system";

const TextFieldComp = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          TEXT FIELD
        </Typography>

        <Box sx={{ mt: 4 }}>
          <TextField
            id="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect email format"}
          />
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            id="password"
            label="Pasword"
            placeholder="Enter your password"
            fullWidth
            error={error}
            helperText={error && "Incorrect password"}
          />

          <Button variant="contained" color="warning" sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
