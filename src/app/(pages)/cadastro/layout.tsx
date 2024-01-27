"use client";

import { Center, Flex } from "@chakra-ui/react";
import Sidebar from "./@componets/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex>
      <Sidebar />
      <Center flexDir={"column"} w="100vw" h="100vh">
        {children}
      </Center>
    </Flex>
  );
}
