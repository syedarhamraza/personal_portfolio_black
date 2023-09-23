import "@/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

import { Analytics } from "@vercel/analytics/react";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import Hamburger from "@/components/Hamburger";

export default function App({ Component, pageProps }) {
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
        <meta
          name="description"
          content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website. Your journey to digital excellence begins here."
        />
        <meta name="author" content="Arhamraza" />
        <meta name="owner" content="SyedArhamRaza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: "light",
        }}
      >
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
