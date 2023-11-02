import css from "../styles/Link.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";
import Head from "next/head";
import Sidebar from "../components/sidebar/Sidebar";

export default function faq() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Links - ArhamMastery</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Syed Arham Raza" key="title" />
        <meta
          name="description"
          content="Explore the website's complete structure with links to various sections and pages."
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta itemProp="name" content="Syed Arham Raza" />
        <meta name="author" content="Arhamraza" />
        <meta name="owner" content="SyedArhamRaza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Sidebar />
      <Layout>
        <section id="links" className={css.container}>
          <div className={css.projects}>
            <h1 className={css.heading}>LINKS</h1>
            <p className={css.desc}>STRUCTURE OF WEBSITE</p>
            <div className={css.links}>
              <ul>
                <li className={css.linkstyle}>
                  <Link href="/">HOME</Link>
                </li>
                <li className={css.linkstyle}>
                  <Link href="/privacypolicy">PRIVACY POLICY</Link>
                </li>
                <li className={css.linkstyle}>
                  <Link href="/termsofuse">TERMS OF USE</Link>
                </li>
                <li className={css.linkstyle}>
                  <Link href="/faq">FAQS</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
