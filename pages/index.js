import Head from "next/head";
import Layout from "@/components/Layout";
import ShuffleHero from "@/components/ShuffleHero";
import About from "@/components/About";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import News from "@/components/News";
import StructuredData from "../components/StructuredData";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.arhamatlas.online",
    name: "SyedArhamRaza",
    description:
      "Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website.",
    alternateName: [
      "Arham Raza",
      "Arham",
      "Syed Arham Web Developer",
      "Syed Arham",
    ],
  };

  return (
    <>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>
            Syed Arham Raza | Web Developer Portfolio: Crafting Digital
            Excellence
          </title>
          <meta
            name="description"
            content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website."
          />
          <meta name="author" content="Arhamraza" />
          <meta name="owner" content="SyedArhamRaza" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="icon" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="icon" type="image/x-icon" href="/logo.png" />
          <link rel="icon" href="/logo.png" type="image/x-icon" />
          <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <StructuredData data={structuredData} />
        <Reveal>
          <ShuffleHero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Reveal>
          <News />
        </Reveal>
      </Layout>
    </>
  );
}
