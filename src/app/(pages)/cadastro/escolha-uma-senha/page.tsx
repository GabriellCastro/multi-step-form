"use client";

import { FC, useState } from "react";
import { Box, Button, Heading, Icon, Stack, useToast } from "@chakra-ui/react";
import { Input } from "@/app/components/Input";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

import { ObjectSchema } from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICreateUserContent } from "@/app/utils/types/form";
import { createUserPasswordSchema } from "@/app/utils/schemas/createUser";

const EscolhaUmaSenha: FC = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleShowPassword1 = () => setShowPassword1((oldValue) => !oldValue);
  const handleShowPassword2 = () => setShowPassword2((oldValue) => !oldValue);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<ICreateUserContent>({
    resolver: yupResolver(
      createUserPasswordSchema as ObjectSchema<ICreateUserContent>
    ),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<ICreateUserContent> = async (data) => {
    // só pode ir para a próxima página se não tiver erros

    if (Object.keys(errors).length > 0) {
      return;
    }

    toast({
      title: "Conta criada com sucesso",
      description: "Você já pode fazer login",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    console.log(data);
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        w={{ base: "100%", md: "400px" }}
        textAlign={"center"}
        p={{ base: "0 1rem", md: "0" }}
        spacing={6}
      >
        <Box>
          <Heading
            as="h1"
            fontWeight={900}
            fontSize="4xl"
            mb={8}
            textAlign="center"
            color="brand.primary.500"
          >
            .ndt
          </Heading>
          <Heading fontSize="1.5rem" fontWeight={700} mb={2} color="white">
            Escolha uma senha
          </Heading>
          <Heading fontSize="1rem" fontWeight={500} color="brand.text.450">
            Deve ter no minimo 8 caracteres
          </Heading>
        </Box>
        <Input
          label="Senha*"
          placeholder="Ex: ********"
          type={showPassword1 ? "text" : "password"}
          variant="secondary"
          register={register("password")}
          {...register("password")}
          error={errors.password}
          iconRight={
            <Icon
              as={showPassword1 ? EyeSlash : Eye}
              fontSize="2xl"
              onClick={handleShowPassword1}
              cursor="pointer"
              p={0.5}
              color="brand.text.300"
            />
          }
        />
        <Input
          label="Confirmar senha*"
          placeholder="Ex: ********"
          register={register("confirmPassword")}
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          type={showPassword2 ? "text" : "password"}
          variant="secondary"
          iconRight={
            <Icon
              as={showPassword2 ? EyeSlash : Eye}
              fontSize="2xl"
              onClick={handleShowPassword2}
              cursor="pointer"
              p={0.5}
              color="brand.text.300"
            />
          }
        />

        <Button
          variant="primary"
          mb={4}
          w={"100%"}
          fontSize={"1rem"}
          type="submit"
        >
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
};

export default EscolhaUmaSenha;
