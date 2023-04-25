



// import { Box, Typography, useMediaQuery, Button } from "@mui/material";
// import Form from "./Form";
// import Design from "components/design";
// import background from "./background.jpg";

// const LoginPage = () => {
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         backgroundImage: `url(${background})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         minHeight: "100vh",
//       }}
//     >
//       <Box position="relative" zIndex={1} mb={5}>
//         <Design />
//       </Box>
//       <Box
//         width={isNonMobileScreens ? "35%" : "90%"}
//         p="2rem"
//         borderRadius="1.5rem"
//         backgroundColor="#ffffff"
//         boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
//       >
//         <Typography fontWeight="bold" fontSize="32px" color="#212121" mb={4}>
//           Welcome back to ExploreIT
//         </Typography>
//         <Form />
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           mt={4}
//           textAlign="center"
//         >
//           Don't have an account?{" "}
//           <Button variant="text" color="primary">
//             Sign up
//           </Button>
//         </Typography>
//       </Box>
//       <Box
//         mt={8}
//         width={isNonMobileScreens ? "35%" : "90%"}
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           width={1 / 3}
//           height={1}
//           backgroundColor="#2e86c1"
//           borderRadius="1rem"
//           py={3}
//           px={2}
//           textAlign="center"
//           mr={3}
//         >
//           <Typography fontWeight="bold" color="#ffffff" mb={2}>
//             Discover new places
//           </Typography>
//           <Typography color="#ffffff">
//             Explore the world's most beautiful destinations with ease and find
//             your next adventure.
//           </Typography>
//         </Box>
//         <Box
//           width={1 / 3}
//           height={1}
//           backgroundColor="#23af9c"
//           borderRadius="1rem"
//           py={3}
//           px={2}
//           textAlign="center"
//           mr={3}
//         >
//           <Typography fontWeight="bold" color="#ffffff" mb={2}>
//             Plan your trip
//           </Typography>
//           <Typography color="#ffffff">
//             Use our planning tools to create the perfect itinerary for your next
//             trip.
//           </Typography>
//         </Box>
//         <Box
//           width={1 / 3}
//           height={1}
//           backgroundColor="#f1c40f"
//           borderRadius="1rem"
//           py={3}
//           px={2}
//           textAlign="center"
//         >
//           <Typography fontWeight="bold" color="#ffffff" mb={2}>
//             Share your experiences
//           </Typography>
//           <Typography color="#ffffff">
//             Connect with fellow travelers and share your travel experiences and
//             tips.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;

