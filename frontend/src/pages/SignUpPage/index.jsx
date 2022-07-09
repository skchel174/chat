import {Box, Typography, useTheme} from "@mui/material";
import RegisterForm from "sections/Auth/RegisterForm";
import RouterLink from "components/Common/RouterLink";

const SignUpPage = () => {
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
          Already have an account?
        </Typography>

        <RouterLink
          sx={{marginLeft: ".3rem"}}
          fontSize=".9rem"
          label="Login"
          to="/login"
        />
      </Box>

      <Typography
        variant="h4"
        sx={{marginBottom: "1.5rem"}}
        color={theme.palette.text.primary}
      >
        Sign Up
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{marginBottom: "1.25rem"}}
        color={theme.palette.text.secondary}
      >
        Get started absolutely free.
      </Typography>

      <RegisterForm/>
    </>
  )
};

export default SignUpPage;
