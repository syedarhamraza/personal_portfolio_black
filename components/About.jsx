import css from "../styles/About.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

import { Avatar } from "@mantine/core";

export default function About() {
  return (
    <>
      <div className={css.container} id="about">
        <h1 className={css.title}>ABOUT</h1>
        <p className={css.titleheading}>INFORMATION ABOUT MYSELF</p>
        <div className={css.about}>
          <div className={css.left}>
            <div className={css.right}>
              <div className={css.avatarContainer}>
                <Avatar src="logo.jpg" alt="it's me" size={330} radius={200} />
                <div className={css.signature}>SYED</div>
              </div>
            </div>

            <h1 className={css.heading}>SYED ARHAM RAZA</h1>
            <p className={css.desc}>
              I&apos;m a one-year-experienced web developer proficient in HTML,
              CSS, JavaScript, and React. I also have a solid understanding of
              C++. Passionate about creating user-friendly web interfaces and
              staying updated with the latest trends. Ready to tackle diverse
              development challenges
            </p>
            <Link href="#projects">
              <button className={css.btn}>PROJECTS</button>
            </Link>
            <div className={css.social}>
              <div className={css.links}>
                <Link
                  rel="preload"
                  href="https://www.instagram.com/_syedarham_raza_/"
                  target="_blank"
                >
                  <InstagramIcon sx={{ fontSize: 40 }} />
                </Link>
              </div>
              <div className={css.links}>
                <Link
                  rel="preload"
                  href="https://api.whatsapp.com/send/?phone=923339555742&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <WhatsAppIcon sx={{ fontSize: 40 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
