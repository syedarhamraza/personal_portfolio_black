import Footer from "./Footer";
import Header from "./Header";
import Reveal from "./Reveal";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
