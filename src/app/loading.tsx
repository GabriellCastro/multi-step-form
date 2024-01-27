"use client";

import { FC } from "react";
import { HashLoader } from "react-spinners";
import { Box } from "@chakra-ui/react";

const Loading: FC = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <HashLoader color="#F1D300" size={50} />
    </Box>
  );
};

export default Loading;
