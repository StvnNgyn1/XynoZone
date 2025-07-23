import { Box, Button, Stack, Typography } from "@mui/material";
import CreateButton from "../../components/CreateButton";
import JoinButton from "../../components/JoinButton";
import HomeButton from "../../components/HomeButton";

import "../../styles.css";

const NeanderthalsStart = () => {
  return (
    <Box>
      <Stack className="flex h-screen w-screen items-center bg-gradient-to-b from-blue-500 to-red-500 p-4">
        <Box className="w-full flex justify-start">
          <HomeButton/>
        </Box>
        <Box className="text-[18vw] sm:text-[16vw] md:text-[12vw] lg:text-[8vw] font-bold text-center text-blue-800 [text-shadow:_8px_5px_0_black]">
          XynoZone
        </Box>
        <Box className="text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold text-center text-white [text-shadow:_1px_1px_0_black] mt-[2vh]">
          <Box> Welcome to Neanderthals! </Box>
        </Box>
        <Box className="mt-[12vh] flex flex-col items-center gap-4">
          <CreateButton/>
          
          <JoinButton/>
        </Box>
      </Stack>
    </Box>
  );
};

export default NeanderthalsStart;
