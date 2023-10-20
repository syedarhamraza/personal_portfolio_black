import css from "../styles/About.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

function Number({ n }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div ref={ref}>
      {inView && <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>}
    </div>
  );
}

function Numbertwo({ n }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { number } = useSpring({
    from: { number: 1800 },
    number: inView ? n : 1800,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div ref={ref}>
      {inView && <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>}
    </div>
  );
}

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
                <Image
                  src="/logoooo.jpg"
                  alt="picture of syed arham raza"
                  width={330}
                  height={330}
                  className={css.logoo}
                />
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
            <div className={css.btn2}>
              <Link href="#projects">
                <button className={css.btn}>PROJECTS</button>
              </Link>
              <Link
                rel="preload"
                href="https://drive.google.com/file/d/1emP-zspOYfhlotogqD6NyjI87eMB33CL/view?usp=sharing"
              >
                <button className={css.btn3}>DOWNLOAD CV</button>
              </Link>
            </div>

            <div className={css.social}>
              <div className={css.links}>
                <Link
                  rel="preload"
                  href="https://www.instagram.com/arhammastery.dev"
                  target="_blank"
                >
                  <InstagramIcon sx={{ fontSize: 35 }} />
                </Link>
              </div>
              <div className={css.links}>
                <Link
                  rel="preload"
                  href="https://api.whatsapp.com/send/?phone=923339555742&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <WhatsAppIcon sx={{ fontSize: 35 }} />
                </Link>
              </div>
            </div>
            <div className={css.numbers_container}>
              <div className={css.background}>
                <span className={css.number}>
                  <Numbertwo n={10} />
                  <span>+</span>
                </span>
                <span className={css.numdesc}>Projects</span>
              </div>
              <div className={css.background}>
                <span className={css.number}>
                  <Number n={1800} />
                  <span>+</span>
                </span>
                <span className={css.numdesc}>Hours</span>
              </div>
              <div className={css.background}>
                <span className={css.number}>
                  <Numbertwo n={1} />
                  <span>+</span>
                </span>
                <span className={css.numdesc}>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
