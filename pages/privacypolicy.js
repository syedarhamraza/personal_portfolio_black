import Head from "next/head";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

import css from "@/styles/termsofuse.module.css";
import Link from "next/link";

export default function privacypolicy() {
  return (
    <>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>
            Privacy | Syed Arham Raza | Web Developer Portfolio: Crafting
            Digital Excellence
          </title>
          <meta
            name="description"
            content="Experience the expertise of a skilled web developer. Discover responsive design, full-stack development, and digital artistry at this Website. Your journey to digital excellence begins here."
          />
          <meta name="author" content="Arhamraza" />
          <meta name="owner" content="SyedArhamRaza" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />

          <link rel="icon" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="icon" type="image/x-icon" href="/logo.png" />
          <link rel="icon" href="/logo.png" type="image/x-icon" />
          <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <Reveal>
          <div className={css.container}>
            <div className={css.terms}>
              <h1 className={css.heading}>PRIVACY</h1>
              <p className={css.desc}>PRIVACY POLICY</p>
              <div className={css.outline}>
                <div className={css.background}>
                  <h2 className={css.pheading}>Privacy Policy</h2>

                  <p className={css.pdesc}>
                    This Privacy Policy explains how this Website (referred to
                    as we, us, or our) collects, uses, and protects your
                    personal information. By using this Website, you consent to
                    the practices described in this Privacy Policy.
                  </p>

                  <h2 className={css.pheading}>1. Information We Collect</h2>
                  <p className={css.pdesc}>
                    We may collect personal information that you voluntarily
                    provide when using this Website. This information may
                    include your name, email address, and any other details you
                    choose to share with us.
                  </p>

                  <h2 className={css.pheading}>
                    2. How We Use Your Information
                  </h2>
                  <span className={css.pdesc}>
                    We may use the information we collect to:
                    <p>
                      Provide you with the services and information you request.
                    </p>
                    <p>Respond to your inquiries and communicate with you.</p>
                    <p>Improve this Website and enhance user experience.</p>
                    <p>
                      Send you updates, newsletters, or promotional materials if
                      you have subscribed to them.
                    </p>
                  </span>

                  <h2 className={css.pheading}>3. Information Sharing</h2>
                  <p className={css.pdesc}>
                    We do not sell, trade, or otherwise transfer your personal
                    information to outside parties. Your information may be
                    shared with trusted service providers who assist us in
                    operating this Website, as long as they agree to keep the
                    information confidential.
                  </p>

                  <h2 className={css.pheading}>4. Security</h2>
                  <p className={css.pdesc}>
                    We take reasonable measures to protect your personal
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, please be aware that no
                    method of transmission over the internet or electronic
                    storage is completely secure, and we cannot guarantee
                    absolute security.
                  </p>

                  <h2 className={css.pheading}>5. Cookies</h2>
                  <p className={css.pdesc}>
                    This Website may use cookies to enhance user experience. You
                    can choose to disable cookies through your browser settings,
                    but this may affect certain website functions.
                  </p>

                  <h2 className={css.pheading}>
                    6. Links to Third-Party Websites
                  </h2>
                  <p className={css.pdesc}>
                    This Website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    these websites. We encourage you to review the privacy
                    policies of any third-party sites you visit.
                  </p>

                  <h2 className={css.pheading}>
                    7. Changes to this Privacy Policy
                  </h2>
                  <p className={css.pdesc}>
                    We reserve the right to update this Privacy Policy at any
                    time. Any changes will be posted on this page with a revised
                    Last Updated date. Your continued use of This Website after
                    such changes constitutes acceptance of the updated Privacy
                    Policy.
                  </p>

                  <h2 className={css.pheading}>8. Contact Information</h2>
                  <p className={css.pdesc}>
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at{" "}
                    <Link href="/#contact">CONTACT.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Layout>
    </>
  );
}
