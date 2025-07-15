import { Box, Button, Stack, Typography } from "@mui/material";
import NeanderthalsButton from "../../components/NeanderthalsButton";

import "../../styles.css";

const HomePage = () => {
  return (
    <Box>
      <Stack className="flex h-screen w-screen items-center bg-gradient-to-b from-blue-500 to-white-500">
        <Box className="text-[18vw] sm:text-[16vw] md:text-[12vw] lg:text-[8vw] font-bold text-center text-blue-800 [text-shadow:_8px_5px_0_black]">
          XynoZone
        </Box>
        <Box className="text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold text-center text-white [text-shadow:_1px_1px_0_black] mt-[2vh]">
          <Box> Select a game to continue! </Box>
        </Box>
        <Box className="mt-[12vh]">
          <NeanderthalsButton></NeanderthalsButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomePage;
