import Head from "next/head";
import Layout from "@/components/Layout";
import ShuffleHero from "@/components/ShuffleHero";
import About from "@/components/About";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StructuredData from "../components/StructuredData";
import Faq from "../components/Faq";
import Links from "../components/Links";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.arhammastery.dev/",
    name: "Syed Arham Raza",
    logo: "https://www.arhammastery.dev/favicon.ico",
    description:
      "Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website.",
    email: "contact@arhammastery.dev",
    sameAs: [
      "https://github.com/arhamraza112",
      "https://www.instagram.com/_syedarham_raza_/",
      "https://www.linkedin.com/in/arham-raza-b27327269/",
      "https://www.linkedin.com/in/syed-arham-raza-atlas/",
    ],
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
            Syed Arham Raza - Web Developer: Crafting Digital Excellence
          </title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Syed Arham Raza" key="title" />
          <meta
            name="description"
            content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website."
          />
          <link rel="canonical" href="https://www.arhammastery.dev" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta itemProp="name" content="Syed Arham Raza" />
          <meta name="author" content="Arhamraza" />
          <meta name="owner" content="SyedArhamRaza" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
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
          <Faq />
        </Reveal>
        <Reveal>
          <Links />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </Layout>
    </>
  );
}
