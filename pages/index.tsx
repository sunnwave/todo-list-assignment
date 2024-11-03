import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../src/components/units/header/Header.container";
import TodoList from "../src/components/units/list/TodoList.container";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Codeit To Do List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/todo-list-assignment/favicon.png" />
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <TodoList />
    </>
  );
}
