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
  const faqData = [
    {
      question: "Who is Arham Mastery?",
      answer:
        "Arham Mastery, as described, is a one-year-experienced web developer with proficiency in HTML, CSS, JavaScript, and React. They also have a solid understanding of C++. Arham is passionate about creating user-friendly web interfaces and staying updated with the latest trends in web development. They are ready to tackle diverse development challenges, reflecting a strong commitment to continuous learning and problem-solving in the field of web development.",
    },
    {
      question: "What is the purpose of your portfolio?",
      answer:
        "The purpose of my portfolio is to showcase my skills, experience, and the projects I've worked on as a web developer. It serves as a comprehensive representation of my abilities.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "Certainly, you can view a collection of my previous work on my portfolio website. It showcases a range of web development projects, including descriptions and links to live websites and case studies for a more in-depth understanding of my work.",
    },
    {
      question: "How can I get in touch with you?",
      answer:
        "You can reach out to me through the contact information provided on my website. Feel free to use the email address or contact form to get in touch, and I'll respond as soon as possible.",
    },
    {
      question:
        "What security measures do you have in place to protect websites?",
      answer:
        "I prioritize website security by using Vercel for deployments and Let's Encrypt SSL certificates to encrypt data in transit. Security measures are tailored to each project based on specific user requirements and potential threats.",
    },
  ];
  const structuredData2 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    datePublished: "2023-10-20",
    dateModified: "2023-10-20",
  };

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
    datePublished: "2023-10-20",
    dateModified: "2023-10-20",
  };

  const structuredData3 = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "Syed Arham Raza",
    url: "https://www.arhammastery.dev",
    description:
      "Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website.",
    email: "contact@arhammastery.dev",

    alternateName: [
      "Arham Raza",
      "Arham",
      "Syed Arham Web Developer",
      "Syed Arham",
    ],
    datePublished: "2023-10-20",
    dateModified: "2023-10-20",
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
        <StructuredData data={structuredData2} />
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
