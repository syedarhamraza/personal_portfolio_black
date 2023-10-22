import classes from "../styles/Links.module.css";
import Link from "next/link";

export default function Links() {
  return (
    <>
      <main className={classes.container}>
        <section id="table-of-contents" className={classes.link}>
          <h2 className={classes.heading}>STRUCTURE</h2>
          <p className={classes.desc}>TABLE OF CONTENT</p>
          <div className={classes.links}>
            <ul>
              <li>
                <Link href="#home">Get started</Link>
              </li>
              <li>
                <Link href="#about">About myself</Link>
              </li>
              <li>
                <Link href="#skills">Some of my skills</Link>
              </li>
              <li>
                <Link href="#projects">Projects I worked on</Link>
              </li>
              <li>
                <Link href="#frequently-asked-questions">
                  Frequently asked quetions
                </Link>
              </li>
              <li>
                <Link href="#contact">Get in touch</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
