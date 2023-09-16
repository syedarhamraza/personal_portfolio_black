import Image from "next/image";
import css from "../styles/Hero.module.css";
import logo from "../assets/Online world-bro.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function ShuffleHero() {
  return (
    <>
      <div className={css.container}>
        <div>
          <Image src={logo} width={450} height={450} alt="" />
        </div>
        <div className={css.info}>
          <h3 className={css.subheading1}>Hello I&apos;m</h3>
          <h1 className={css.heading}>SYED ARHAM RAZA</h1>
          <h3 className={css.subheading}>Web Developer</h3>
          <div className={css.button}>
            <Link href="#about">
              <button className={css.btn}>GET STARTED</button>
            </Link>
            <Link href="#contact">
              <button className={css.btn2}>CONTACT ME</button>
            </Link>
          </div>
          <div className={css.social}>
            <div className={css.links}>
              <Link
                href="https://www.instagram.com/_dev_arham/"
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: 40 }} />
              </Link>
            </div>
            <div className={css.links}>
              <Link
                href="https://www.linkedin.com/in/arham-raza-b27327269/"
                target="_blank"
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </Link>
            </div>
            <div className={css.links}>
              <Link href="https://github.com/arhamraza112" target="_blank">
                <GitHubIcon sx={{ fontSize: 40 }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
