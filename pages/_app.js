import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
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
        <Sidebar />
        <ScrollToTopButton />
      </MantineProvider>
    </>
  );
}
