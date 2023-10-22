import Head from "next/head";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import css from "@/styles/termsofuse.module.css";
import Link from "next/link";

export default function termsofuse() {
  return (
    <>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>Terms - ArhamMastery</title>
          <meta
            name="description"
            content="Our Terms of Use to understand the guidelines and rules for using our website. Learn about user responsibilities, content policies, and more."
          />
          <meta name="author" content="Arhamraza" />
          <meta name="owner" content="SyedArhamRaza" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Reveal>
          <div className={css.container}>
            <div className={css.terms}>
              <h1 className={css.heading}>TERMS</h1>
              <p className={css.desc}>TERMS OF USE</p>
              <div className={css.outline}>
                <div className={css.background}>
                  <h2 className={css.pheading}>Terms of Use</h2>

                  <p className={css.pdesc}>
                    By accessing or using this Website (referred to as we, us,
                    or our), you agree to abide by these Terms of Use. If you do
                    not agree with any of these Terms, please refrain from using
                    this Website.
                  </p>

                  <h2 className={css.pheading}>1. Acceptance of Terms</h2>
                  <p className={css.pdesc}>
                    By accessing or using this Website, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms
                    and any applicable laws and regulations. If you do not agree
                    with these Terms, please discontinue using the website
                    immediately.
                  </p>

                  <h2 className={css.pheading}>2. Changes to the Terms</h2>
                  <p className={css.pdesc}>
                    We reserve the right to modify or revise these Terms at any
                    time, and any such changes will be effective immediately
                    upon posting. Your continued use of this Website constitutes
                    acceptance of the updated Terms. We encourage you to review
                    these Terms periodically to stay informed about any changes.
                  </p>

                  <h2 className={css.pheading}>3. Use of Content</h2>
                  <p className={css.pdesc}>
                    All content on this Website, including but not limited to
                    text, images, graphics, videos, and other materials, is the
                    intellectual property of this Website or its licensors and
                    is protected by copyright and other intellectual property
                    laws. You may access and use the content for personal,
                    non-commercial purposes only. Any other use, including
                    reproduction, distribution, or modification, is strictly
                    prohibited without our prior written consent.
                  </p>

                  <h2 className={css.pheading}>4. User Contributions</h2>
                  <p className={css.pdesc}>
                    You may have the opportunity to submit comments, feedback,
                    or other content to this Website. By doing so, you grant us
                    a non-exclusive, royalty-free, worldwide, irrevocable
                    license to use, reproduce, modify, adapt, publish,
                    translate, and distribute your content in any medium. You
                    also represent and warrant that you have the necessary
                    rights to grant us this license.
                  </p>

                  <h2 className={css.pheading}>5. Privacy</h2>
                  <p className={css.pdesc}>
                    Our Privacy Policy, which is incorporated by reference,
                    explains how we collect, use, and protect your personal
                    information. By using this Website, you consent to the
                    practices described in the Privacy Policy.
                  </p>

                  <h2 className={css.pheading}>6. Third-Party Links</h2>
                  <p className={css.pdesc}>
                    This Website may contain links to third-party websites or
                    services that are not under our control. We are not
                    responsible for the content or practices of these
                    third-party sites. Your use of third-party sites is subject
                    to their respective terms and policies.
                  </p>

                  <h2 className={css.pheading}>7. Disclaimer</h2>
                  <p className={css.pdesc}>
                    This Website is provided on an as i and as available basis,
                    without any warranties, express or implied. We do not
                    guarantee the accuracy, completeness, or reliability of the
                    content or services provided on the website. Your use of
                    this Website is at your own risk.
                  </p>

                  <h2 className={css.pheading}>8. Limitation of Liability</h2>
                  <p className={css.pdesc}>
                    To the fullest extent permitted by law, we shall not be
                    liable for any direct, indirect, incidental, special,
                    consequential, or punitive damages arising out of or in
                    connection with your use of this Website or the content
                    provided herein.
                  </p>

                  <h2 className={css.pheading}>9. Contact Information</h2>
                  <p className={css.pdesc}>
                    If you have any questions or concerns about these Terms,
                    please contact us at <Link href="/#contact">CONTACT.</Link>
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
