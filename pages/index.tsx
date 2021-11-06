import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import IndexPage from "../containers/IndexPage";

const Index: NextPage = () => (
  <>
    <Head>
      <title>Тестовое задание по доступности | Мошкин Артем</title>
    </Head>

    <IndexPage />
  </>
);

export default Index;
