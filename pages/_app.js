import "@/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

import { Analytics } from "@vercel/analytics/react";

import ScrollToTopButton from "@/components/ScrollToTopButton";

import Sidebar from "../components/sidebar/Sidebar";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-K445B36RV3" />
        <Script id="google-analytics">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-K445B36RV3');
        `}
        </Script>
        <Analytics />
        <Sidebar />
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
