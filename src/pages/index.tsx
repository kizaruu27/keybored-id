import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { data }: any = useSession();
  console.log(data);

  return (
    <>
      <Head>
        <title>KeyBoredID</title>
      </Head>
      <h1>{data?.user?.name}</h1>
      <button className="bg-green-500 px-5 py-2 text-white mt-5" onClick={() => signIn()}>
        Login
      </button>
    </>
  );
}
