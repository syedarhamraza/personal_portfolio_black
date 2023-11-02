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
<<<<<<< HEAD
=======
        <Sidebar />
>>>>>>> 11d954e9aed7e2a028b8be86c6ee11c7aa5ad727
        <ScrollToTopButton />
      </MantineProvider>
    </>
  );
}
