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
  const structuredData = [
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "@id": "https://www.arhammastery.dev/#home",
      url: "https://www.arhammastery.dev/",
      name: "Syed Arham Raza - Web Developer - ArhamMastery",
      description:
        "Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.arhammastery.dev/#home",
        name: "Syed Arham Raza",
        url: "https://www.arhammastery.dev/",
        sameAs: [
          "https://www.facebook.com/arhammastery",
          "https://github.com/arhammastery",
          "https://www.youtube.com/c/arhammastery",
          "https://www.instagram.com/arhammastery.dev",
        ],
        image: {
          "@type": "ImageObject",
          url: "https://www.arhammastery.dev/android-chrome-512x512.png/",
          height: 400,
          width: 400,
        },
      },
    },

    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      name: "Syed Arham Raza",
      url: "https://www.arhammastery.dev",
      description:
        "Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website.",
      alternateName: [
        "Arham Raza",
        "Arham",
        "Syed Arham Web Developer",
        "Syed Arham",
      ],
      datePublished: "2023-10-20",
      dateModified: "2023-10-20",
    },
    {
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
    },
  ];

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
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Syed Arham Raza" key="title" />
          <meta property="og:url" content="https://www.arhammastery.dev" />
          <meta property="og:site_name" content="Syed Arham Raza" />
          <meta
            property="og:description"
            content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website."
          />
          <meta
            property="og:image"
            content="https://www.arhammastery.dev/api/og"
          />
          <meta property="og:image:alt" content="A logo of Arham Mastery" />
          <meta
            property="twitter:image"
            content="https://www.arhammastery.dev/api/og"
          />
          <meta
            property="twitter:card"
            content="https://www.arhammastery.dev/api/og"
          />
          <meta
            property="twitter:title"
            content="Syed Arham Raza - Web Developer"
          />
          <meta
            property="twitter:description"
            content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website."
          />
          <meta
            name="description"
            content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website."
          />
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
