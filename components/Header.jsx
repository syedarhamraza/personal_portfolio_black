import Link from "next/link";
import css from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>Arham</div>
        <div className={css.link}>
          <Link href="/">
            <span>HOME</span>
          </Link>
          <Link href="#about">
            <span>ABOUT</span>
          </Link>
          <Link href="#skills">
            <span>SKILLS</span>
          </Link>
          <Link href="#projects">
            <span>PROJECTS</span>
          </Link>
          <Link href="#contact">
            <span>CONTACT</span>
          </Link>
        </div>
      </div>
    </>
  );
}
