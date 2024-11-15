import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor={theme.palette.background.default}
    >
      <Box
        width="100%"
        maxWidth="400px"
        textAlign="center"
        mb={2}
      >
        <Typography variant="h3" fontWeight="700" color="primary" gutterBottom>
          Sociopedia
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Connect with people who share your unique perspective.
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "90%"}
        maxWidth="400px"
        p={4}
        boxShadow={3}
        borderRadius="8px"
        backgroundColor={theme.palette.background.paper}
      >
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
