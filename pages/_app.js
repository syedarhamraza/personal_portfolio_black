import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Sidebar from "../components/sidebar/Sidebar";

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
        <ScrollToTopButton />
      </MantineProvider>
    </>
  );
}
