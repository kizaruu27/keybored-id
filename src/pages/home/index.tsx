import HeroSection from "@/components/heroSection/heroSection";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Keybored | Home</title>
      </Head>
      <Navbar />
      <div className="px-5 py-10">
        <HeroSection />
      </div>
    </>
  );
}
