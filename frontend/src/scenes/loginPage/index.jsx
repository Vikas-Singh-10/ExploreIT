import { Box, Typography, useMediaQuery, Paper } from "@mui/material";
import Form from "./Form";
import Design from "components/design";
import socializeBackground from "./back.png"

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      sx={{
        backgroundImage: `url(${socializeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box position="relative" zIndex={1} flex={1}>
        <Design />
      </Box>

      <Box flex={2} display="flex" flexDirection="column" alignItems="center">
        <Box
          width={isNonMobileScreens ? "35%" : "80%"}
          p={4}
          m={2}
          borderRadius="1.5rem"
          component={Paper}
          elevation={4}
        >
          <Typography variant="h4" align="center" gutterBottom style={{fontWeight: "bold", color: "#116466"}}>
            Welcome to ExploreIT
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Please sign in to continue
          </Typography>
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
