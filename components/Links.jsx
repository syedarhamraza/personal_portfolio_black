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
                <Link href="#home">GET STARTED</Link>
              </li>
              <li>
                <Link href="#about">ABOUT MYSELF</Link>
              </li>
              <li>
                <Link href="#skills">SOME OF MY SKILLS</Link>
              </li>
              <li>
                <Link href="#projects">PROJECTS I WORKED ON</Link>
              </li>
              <li>
                <Link href="#frequently-asked-questions">
                  FREQUENTLY ASKED QUESTION
                </Link>
              </li>
              <li>
                <Link href="#contact">GET IN TOUCH</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
