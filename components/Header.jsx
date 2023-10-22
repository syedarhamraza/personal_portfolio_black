import Link from "next/link";
import css from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className={css.container}>
        <div className={css.button}></div>
        <div className={css.link}>
          <div className={css.background}>
            <Link href="/">
              <span>HOME</span>
            </Link>
            <Link href="/#about">
              <span>ABOUT</span>
            </Link>
            <Link href="/#skills">
              <span>SKILLS</span>
            </Link>
            <Link href="/#projects">
              <span>PROJECTS</span>
            </Link>
            <Link href="/#contact">
              <span>CONTACT</span>
            </Link>
          </div>
        </div>
        <div className={css.logo}>
          <Link href="/">
            <Image
              priority
              src="/android-chrome-512x512.png"
              alt="arham mastery logo"
              width={70}
              height={70}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
