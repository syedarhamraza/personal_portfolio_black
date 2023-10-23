import { Container, Accordion } from "@mantine/core";
import classes from "../styles/faq.module.css";
import Link from "next/link";

export default function Faq() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.background}>
          <h2 className={classes.heading}>FAQ</h2>
          <p className={classes.desc}>ANSWERS TO YOUR QUESTIONS</p>
        </div>
      </div>
      <section id="frequently-asked-questions">
        <Container size="sm" className={classes.wrapper}>
          <h2 className={classes.title}>Frequently Asked Questions</h2>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="Arham-mastery">
              <Accordion.Control className={classes.itemtitle}>
                Who is Arham Mastery?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                Arham Mastery, as described, is a one-year-experienced web
                developer with proficiency in HTML, CSS, JavaScript, and React.
                They also have a solid understanding of C++. Arham is passionate
                about creating user-friendly web interfaces and staying updated
                with the latest trends in web development. They are ready to
                tackle diverse development challenges, reflecting a strong
                commitment to continuous learning and problem-solving in the
                field of web development.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="purpose-portfolio">
              <Accordion.Control className={classes.itemtitle}>
                What is the purpose of your portfolio?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                My portfolio is a reflection of my passion for web development.
                It&apos;s a platform where I showcase my skills, experience, and
                the projects I&apos;ve worked on, serving as a comprehensive
                representation of my abilities in this exciting hobby.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="previous-work">
              <Accordion.Control className={classes.itemtitle}>
                Can I see examples of your previous work?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                Certainly, you can view a collection of my previous{" "}
                <Link className={classes.link} href="#projects" rel="preload">
                  work{" "}
                </Link>{" "}
                on my portfolio website. It showcases a range of web development
                projects, including descriptions and links to live websites and
                case studies for a more in-depth understanding of my work.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="contact">
              <Accordion.Control className={classes.itemtitle}>
                How can I get in touch with you?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                You can reach out to me through the{" "}
                <Link className={classes.link} href="#contact" rel="preload">
                  contact{" "}
                </Link>
                information provided on my website. Feel free to use the email
                address or{" "}
                <Link className={classes.link} href="#contact" rel="preload">
                  contact{" "}
                </Link>{" "}
                form to get in touch, and I&apos;ll respond as soon as possible.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="web-protection">
              <Accordion.Control className={classes.itemtitle}>
                What security measures do you have in place to protect websites?
              </Accordion.Control>
              <Accordion.Panel className={classes.itemdesc}>
                I prioritize website security by using Vercel for deployments
                and Let&apos;s Encrypt SSL certificates to encrypt data in
                transit. Security measures are tailored to each project based on
                specific user requirements and potential threats.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
}
