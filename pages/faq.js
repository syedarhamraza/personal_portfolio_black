import { Container, Accordion } from "@mantine/core";
import classes from "../styles/faq.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";
import Head from "next/head";
import StructuredData from "../components/StructuredData";
import Sidebar from "../components/sidebar/Sidebar";

export default function faq() {
  const faqData = [
    {
      question: "Who is Arham Mastery?",
      answer:
        "Arham Mastery, as described, is a one-year-experienced web developer with proficiency in HTML, CSS, JavaScript, and React. They also have a solid understanding of C++. Arham is passionate about creating user-friendly web interfaces and staying updated with the latest trends in web development. They are ready to tackle diverse development challenges, reflecting a strong commitment to continuous learning and problem-solving in the field of web development.",
    },
    {
      question: "What is the purpose of your portfolio?",
      answer:
        "My portfolio is a reflection of my passion for web development.It's a platform where I showcase my skills, experience, and the projects I've worked on, serving as a comprehensive representation of my abilities in this exciting hobby.",
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

  const structuredData = {
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
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Frequently asked question</title>
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
        <meta property="og:title" content="Faq - ArhamMastery" key="title" />
        <meta
          property="og:description"
          content="Frequently Asked Questions (FAQ) page featuring answers to common questions about Arham Mastery."
        />
        <meta
          property="og:image"
          content="https://www.arhammastery.dev/api/ogfaq"
        />
        <meta property="og:image:alt" content="A logo of Arham Mastery" />
        <meta
          property="twitter:image"
          content="https://www.arhammastery.dev/api/ogfaq"
        />
        <meta
          property="twitter:card"
          content="https://www.arhammastery.dev/api/ogfaq"
        />
        <meta property="twitter:title" content="Faq - ArhamMastery" />
        <meta
          property="twitter:description"
          content="Frequently Asked Questions (FAQ) page featuring answers to common questions about Arham Mastery."
        />
        <meta
          name="description"
          content="Frequently Asked Questions (FAQ) page featuring answers to common questions about Arham Mastery."
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="author" content="Arhamraza" />
        <meta name="owner" content="SyedArhamRaza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Sidebar />
      <StructuredData data={structuredData} />
      <Layout>
        <Container size="sm" className={classes.wrapper}>
          <span className={classes.title}>Frequently Asked Questions</span>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="Arham-mastery">
              <Accordion.Control className={classes.itemtitle}>
                Who is Arham Mastery?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                Arham Mastery, as described, is a one-year-experienced web
                developer with proficiency in HTML, CSS, JavaScript, and React.
                They also have a solid understanding of C++. Arham is passionate
                about creating user-friendly web interfaces and staying updated
                with the latest trends in web development. They are ready to
                tackle diverse development challenges, reflecting a strong
                commitment to continuous learning and problem-solving in the
                field of web development.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="purpose-portfolio">
              <Accordion.Control className={classes.itemtitle}>
                What is the purpose of your portfolio?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                My portfolio is a reflection of my passion for web development.
                It&apos;s a platform where I showcase my skills, experience, and
                the projects I&apos;ve worked on, serving as a comprehensive
                representation of my abilities in this exciting hobby.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="previous-work">
              <Accordion.Control className={classes.itemtitle}>
                Can I see examples of your previous work?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                Certainly, you can view a collection of my previous{" "}
                <Link className={classes.link} href="/#projects" rel="preload">
                  work{" "}
                </Link>{" "}
                on my portfolio website. It showcases a range of web development
                projects, including descriptions and links to live websites and
                case studies for a more in-depth understanding of my work.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="contact">
              <Accordion.Control className={classes.itemtitle}>
                How can I get in touch with you?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                You can reach out to me through the{" "}
                <Link className={classes.link} href="/#contact" rel="preload">
                  contact{" "}
                </Link>
                information provided on my website. Feel free to use the email
                address or{" "}
                <Link className={classes.link} href="/#contact" rel="preload">
                  contact{" "}
                </Link>{" "}
                form to get in touch, and I&apos;ll respond as soon as possible.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="web-protection">
              <Accordion.Control className={classes.itemtitle}>
                What security measures do you have in place to protect websites?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                I prioritize website security by using Vercel for deployments
                and Let&apos;s Encrypt SSL certificates to encrypt data in
                transit. Security measures are tailored to each project based on
                specific user requirements and potential threats.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Layout>
    </>
  );
}
