import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import NavBar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import { useState } from "react";

const HomePage = () => {
  const posts = useSelector((state) => state.posts);
  const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredPostss = posts.filter(post => {
      return post.firstName.toLowerCase().includes(searchfield.toLowerCase()) || post.lastName.toLowerCase().includes(searchfield.toLowerCase());
})



  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Box position="fixed" top={0} left={0} width="100%" zIndex={1}>
        <NavBar searchChange={onSearchChange} />
      </Box>
      <Box
        marginTop="60px"
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget style={{ position: "sticky", top: "60px" }} />
            <Box m="2rem 0" />
            <FriendListWidget style={{ position: "sticky", top: "60px" }} userId={_id} />
          </Box>
        )}
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} ppp={filteredPostss} />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget class="fixed" userId={_id} picturePath={picturePath} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
