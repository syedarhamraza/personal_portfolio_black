import { Html, Head, Main, NextScript } from "next/document";
import StructuredData from "../components/StructuredData";

export default function Document() {
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

  return (
    <Html lang="en">
      <Head>
        <StructuredData data={structuredData} />

        <meta
          name="description"
          content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.arhammastery.dev" />
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta itemProp="name" content="Syed Arham Raza" />
        <meta property="og:title" content="Syed Arham Raza" key="title" />
        <meta name="author" content="Arhamraza" />
        <meta name="owner" content="SyedArhamRaza" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <StructuredData data={structuredData} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
