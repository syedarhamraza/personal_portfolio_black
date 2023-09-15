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
              <InstagramIcon sx={{ fontSize: 40 }} />
            </div>
            <div className={css.links}>
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </div>
            <div className={css.links}>
              <GitHubIcon sx={{ fontSize: 40 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
