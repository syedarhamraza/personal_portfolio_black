import "@/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

import { Analytics } from "@vercel/analytics/react";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import Hamburger from "@/components/Hamburger";
import StructuredData from "../components/StructuredData";

export default function App({ Component, pageProps }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.arhamatlas.online",
    name: "Syed Arham Raza",
    description:
      "Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website.",
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
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>
          Syed Arham Raza | Web Developer Portfolio: Crafting Digital Excellence
        </title>
        <meta property="og:type" content="website" />

        <meta
          name="description"
          content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta itemProp="name" content="Syed Arham Raza" />
        <meta property="og:title" content="Syed Arham Raza" key="title" />
        <meta name="author" content="Arhamraza" />
        <meta name="owner" content="SyedArhamRaza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: "light",
        }}
      >
        <StructuredData data={structuredData} />
        <Component {...pageProps} />
        <Hamburger />
        <Analytics />
        <ScrollToTopButton />
        <CookieConsent
          style={{
            background: "#ffffff",
            color: "black",
            fontWeight: "700",
            border: "2px solid black",
          }}
          buttonText="Allow Cookies"
          expires={150}
          buttonStyle={{
            background: "white",
            border: "2px solid black",
            color: "black",
            padding: "8px",
          }}
          buttonClasses=""
        >
          This Site Uses Cookies. See our{" "}
          <Link href="/privacypolicy">
            <span className="link">Privacy Policy</span>
          </Link>{" "}
          for more Information
        </CookieConsent>
      </MantineProvider>
    </>
  );
}
