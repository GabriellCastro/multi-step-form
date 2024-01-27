"use client";

import { FC } from "react";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { Input } from "@/app/components/Input";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreateUserContent } from "../../utils/types/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";
import { createUserSchema } from "../../utils/schemas/createUser";

const SeusDetalhes: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<ICreateUserContent>({
    resolver: yupResolver(createUserSchema as ObjectSchema<ICreateUserContent>),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<ICreateUserContent> = async (data) => {
    // só pode ir para a próxima página se não tiver erros

    if (Object.keys(errors).length > 0) {
      return;
    }

    console.log(data);
    router.push("/cadastro/escolha-uma-senha");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        w={{ base: "100%", md: "400px" }}
        textAlign={"center"}
        spacing={6}
        p={{ base: "0 1rem", md: "0" }}
      >
        <Heading
          as="h1"
          fontWeight={900}
          fontSize="4xl"
          textAlign="center"
          color="brand.primary.500"
        >
          .ndt
        </Heading>
        <Heading fontSize="1.5rem" fontWeight={700} color="white">
          Preencha seus detalhes
        </Heading>
        <Input
          label="Nome completo*"
          register={register("name")}
          {...register("name")}
          error={errors.name}
          placeholder="Ex: João da Silva"
          variant="secondary"
        />
        <Input
          label="E-mail*"
          {...register("email")}
          register={register("email")}
          error={errors.email}
          placeholder="Ex: example@gmail.com"
          variant="secondary"
        />
        <Input
          label="Telefone*"
          register={register("whatsapp")}
          {...register("whatsapp")}
          error={errors.whatsapp}
          placeholder="Ex: (11) 99999-9999"
          variant="secondary"
          mask="(99) 99999-9999"
        />
        <Input
          label="CPF*"
          register={register("cpf")}
          {...register("cpf")}
          error={errors.cpf}
          placeholder="Ex: 999.999.999-99"
          variant="secondary"
          mask="999.999.999-99"
        />
        <Button variant="primary" w={"100%"} fontSize={"1rem"} type="submit">
          Continue
        </Button>
      </Stack>
    </form>
  );
};

export default SeusDetalhes;
