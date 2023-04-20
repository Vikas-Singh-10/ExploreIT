import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Design from "components/design";
import Tilt from "react-parallax-tilt";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <div>
      <Design />
      <Box>
        <Box
          width="100%"
          backgroundColor={theme.palette.background.alt}
          p="1rem 6%"
          textAlign="center"
        >
          <Tilt>
            <div backgroundColor="blue">
              <Typography fontWeight="bold" fontSize="32px" color="primary">
                ExploreIT
              </Typography>
            </div>
          </Tilt>
        </Box>
        
        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
            Explore it, Enjoy it !!
          </Typography>
          <Form />
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
