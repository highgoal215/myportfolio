import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/Avatar.png" />
      </Head>
      <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
        <div className="flex flex-col gap-20">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </main>
    </>
  );
}
