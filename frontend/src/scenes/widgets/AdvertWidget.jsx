import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>One Piece</Typography>
        <Typography color={medium}>Zoro.to</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The series focuses on Monkey D. Luffy—a young man made of rubber after
        unintentionally eating a Devil Fruit—who sets off on a journey from the
        East Blue Sea to find the deceased King of the Pirates Gol D. Roger's
        ultimate treasure known as the "One Piece", and takeover his prior
        title.
      </Typography>
      <Typography color={medium} m="0.5rem 0">
        Go watch now !
      </Typography>

    </WidgetWrapper>
  );
};

export default AdvertWidget;
