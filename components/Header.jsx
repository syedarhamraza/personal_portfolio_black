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
          <Link href="#project">
            <span>ABOUT</span>
          </Link>
          <Link href="#about">
            <span>SKILLS</span>
          </Link>
          <Link href="#about">
            <span>EXPERIENCE</span>
          </Link>
          <Link href="#about">
            <span>PROJECTS</span>
          </Link>
          <Link href="#about">
            <span>CONTACT</span>
          </Link>
        </div>
      </div>
    </>
  );
}
