import {Box, Typography, useTheme} from "@mui/material";
import LoginForm from "components/Auth/LoginForm";
import RouterLink from "components/Common/RouterLink";

const SignInPage = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{
        position: "absolute",
        top: "1.5rem",
        right: "1.5rem",
        display: "flex",
      }}>
        <Typography
          variant="body2"
          sx={{color: theme.palette.text.primary}}
        >
          Don’t have an account?
        </Typography>

        <RouterLink
          sx={{marginLeft: ".3rem"}}
          fontSize=".9rem"
          label="Get started"
          to="/register"
        />
      </Box>

      <Typography
        variant="h4"
        sx={{marginBottom: "1.5rem"}}
        color={theme.palette.text.primary}
      >
        Sign In
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{marginBottom: "1.25rem"}}
        color={theme.palette.text.secondary}
      >
        Enter your details below.
      </Typography>

      <LoginForm/>
    </>
  )
};

export default SignInPage;
