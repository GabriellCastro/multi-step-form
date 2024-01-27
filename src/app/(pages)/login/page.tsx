"use client";

import { FC, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Text,
  Checkbox,
  Icon,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { Input } from "@/app/components/Input";
import { useRouter } from "next/navigation";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((oldValue) => !oldValue);
  const router = useRouter();
  return (
    <Flex>
      <Center
        flexDir={"column"}
        w="100vw"
        h="100vh"
        p={{
          base: "0 1rem",
          md: "0",
        }}
      >
        <Box
          w={{
            base: "100%",
            md: "400px",
          }}
        >
          <Heading
            as="h1"
            fontWeight={900}
            fontSize="4xl"
            mb={2}
            textAlign="center"
            color="white"
          >
            .ndt
          </Heading>
          <Heading
            as="h1"
            fontWeight={700}
            fontSize={"0.75rem"}
            mb={8}
            textAlign="center"
            color="white"
            letterSpacing={"0.2rem"}
          >
            ADMINISTRATIVO
          </Heading>

          <Box>
            <Input
              label="E-mail*"
              placeholder="Ex: example@gmail.com"
              mb={8}
              variant="secondary"
              name="email"
            />
            <Input
              label="Senha*"
              placeholder={showPassword ? "Ex: qwe123" : "Ex: ********"}
              mb={8}
              variant="secondary"
              name="password"
              type={showPassword ? "text" : "password"}
              iconRight={
                <Icon
                  as={showPassword ? EyeSlash : Eye}
                  fontSize="2xl"
                  onClick={handleShowPassword}
                  cursor="pointer"
                  p={0.5}
                  color="brand.text.300"
                  mb={8}
                />
              }
            />
            <Flex justifyContent="space-between" mb={8}>
              <Checkbox
                colorScheme="white"
                color="white"
                borderColor="white"
                size="lg"
                fontWeight={400}
                mr={2}
              >
                <Text fontSize="sm">Lembrar por 30 dias</Text>
              </Checkbox>
              <Button
                variant="link"
                color="brand.primary.500"
                borderBottom="1px solid transparent"
                _hover={{
                  borderBottom: "1px solid",
                  borderColor: "brand.primary.500",
                  color: "brand.primary.500",
                  opacity: 0.8,
                }}
                borderRadius="none"
                fontWeight={400}
                fontSize={"sm"}
              >
                Esqueci a senha
              </Button>
            </Flex>
            <Button
              variant="primary"
              mb={8}
              w={"100%"}
              fontSize={"md"}
              fontWeight={700}
            >
              Entrar
            </Button>

            <Box
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={8}
            >
              <Text fontSize="sm" color="brand.text.450" fontWeight={500}>
                Não tem uma conta?{" "}
                <Button
                  variant="link"
                  color="brand.primary.500"
                  borderBottom="1px solid transparent"
                  _hover={{
                    borderBottom: "1px solid",
                    borderColor: "brand.primary.500",
                    color: "brand.primary.500",
                    opacity: 0.8,
                  }}
                  borderRadius="none"
                  fontWeight={400}
                  fontSize={"sm"}
                  onClick={() => router.push("/cadastro/seus-detalhes")}
                >
                  Cadastre-se
                </Button>
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};

export default Login;
