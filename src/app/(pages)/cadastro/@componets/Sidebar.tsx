"use client";

import { FC, Fragment, useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Check } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

interface StepsDataProps {
  title: string;
  description: string;
}

const StepsData: StepsDataProps[] = [
  {
    title: "Seus detalhes",
    description: "Por favor, coloque seu E-mail, Telefone e CNPJ aqui.",
  },
  {
    title: "Escolha uma senha",
    description: "Escolha uma senha segura",
  },
];

const Sidebar: FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const pathname = usePathname();

  const routesSteps = [
    "/cadastro/seus-detalhes",
    "/cadastro/escolha-uma-senha",
  ];

  useEffect(() => {
    const index = routesSteps.findIndex((route) => route === pathname);
    setStepIndex(index);
  }, [pathname]);

  return (
    <Box
      bg={"brand.backgroundTertiary"}
      h="100vh"
      w="550px"
      display={{
        base: "none",
        md: "block",
      }}
    >
      <Heading
        as="h1"
        fontWeight={900}
        fontSize="4xl"
        mb={8}
        p={8}
        textAlign="left"
        color="white"
      >
        .ndt
      </Heading>
      <Flex mb={5} flexDir="column" px={8}>
        {StepsData.map((_, index) => (
          <Fragment key={index}>
            <Flex>
              <Flex flexDir="column" alignItems={"center"}>
                <Center
                  h={8}
                  w={8}
                  borderRadius="full"
                  bg={
                    index < stepIndex
                      ? "brand.primary.500"
                      : index === stepIndex
                      ? "brand.primary.500"
                      : "none"
                  }
                  color={"brand.backgroundSecondary"}
                  border="1px solid"
                  borderColor={
                    index < stepIndex
                      ? "brand.primary.500"
                      : "brand.primary.500"
                  }
                >
                  {index < stepIndex ? (
                    <Icon as={Check} weight="bold" />
                  ) : (
                    <Box
                      rounded={"full"}
                      w={2}
                      h={2}
                      bg={
                        index < stepIndex
                          ? "brand.primary.500"
                          : index === stepIndex
                          ? "black"
                          : "brand.primary.500"
                      }
                    />
                  )}
                </Center>
                {index < StepsData.length - 1 && (
                  <Box
                    w="4px"
                    h="111px"
                    bg={
                      index < stepIndex
                        ? "brand.primary.500"
                        : "rgba(185, 185, 185, 0.1)"
                    }
                  ></Box>
                )}
              </Flex>
              <Box>
                <Heading
                  as="h2"
                  fontWeight={700}
                  fontSize="md"
                  ml={4}
                  color="white"
                >
                  {StepsData[index].title}
                </Heading>
                <Text ml={4} mt={2} color="brand.text.450" fontSize="sm">
                  {StepsData[index].description}
                </Text>
              </Box>
            </Flex>
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
