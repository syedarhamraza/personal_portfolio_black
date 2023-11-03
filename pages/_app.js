import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
