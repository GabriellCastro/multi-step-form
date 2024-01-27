"use client";

import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/cadastro/seus-detalhes");
  }, [router]);

  return null;
};

export default Home;
