import Link from "next/link";
import css from "../styles/Header.module.css";

import { Burger, Drawer } from "@mantine/core";
import CloseIcon from "@mui/icons-material/Close";

import { useDisclosure } from "@mantine/hooks";
import RevealMenu from "./RevealMenu";
import Image from "next/image";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>
          <Image
            priority
            src="/android-chrome-512x512.png"
            alt="arham mastery logo"
            width={70}
            height={70}
          />
        </div>
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

          <Drawer
            position="top"
            size="100%"
            transitionProps={{
              transition: "slide-down",
              duration: 400,
              timingFunction: "linear",
            }}
            opened={opened}
            onClose={close}
            overlayProps={{ opacity: 0.5, blur: 4 }}
            sx={{
              "&:hover": {
                backgroundColor: "#000",
              },

              "@media (max-width: 48em)": {
                fontSize: "3rem",
              },
            }}
          >
            <RevealMenu>
              <div className={css.drawer}>
                <div className={css.logoo}>
                  <Image
                    priority
                    src="/android-chrome-512x512.png"
                    alt="arham mastery logo"
                    width={150}
                    height={150}
                  />
                </div>

                <Link href="/" onClick={close}>
                  <span>
                    HOME<sup className={css.sup}>1</sup>
                  </span>
                </Link>
                <Link href="/#about" onClick={close}>
                  <span>
                    ABOUT<sup className={css.sup}>2</sup>
                  </span>
                </Link>
                <Link href="/#skills" onClick={close}>
                  <span>
                    SKILLS<sup className={css.sup}>3</sup>
                  </span>
                </Link>
                <Link href="/#projects" onClick={close}>
                  <span>
                    PROJECTS<sup className={css.sup}>4</sup>
                  </span>
                </Link>
                <Link href="/#contact" onClick={close}>
                  <span>
                    CONTACT<sup className={css.sup}>5</sup>
                  </span>
                </Link>
                <div className={css.button} onClick={close}>
                  <CloseIcon
                    color="dark"
                    sx={{
                      fontSize: 40,
                      cursor: "pointer",
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "5rem",
                    }}
                  />
                </div>
              </div>
            </RevealMenu>
          </Drawer>
        </div>
        <div className={css.button} onClick={open}>
          <Burger size="lg" opened={opened} aria-label="Toggle navigation" />
        </div>
      </div>
    </>
  );
}
