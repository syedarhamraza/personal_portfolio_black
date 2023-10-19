import { useEffect, useState } from "react";
import styles from "../styles/Hamburger.module.css";

import CloseIcon from "@mui/icons-material/Close";
import { Burger, Drawer } from "@mantine/core";
import Link from "next/link";

import { useDisclosure } from "@mantine/hooks";
import RevealMenu from "./RevealMenu";
import Image from "next/image";

export default function Hamburger() {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 900);
  };

  const [opened, { open, close }] = useDisclosure(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
          <div className={styles.drawer}>
            <div className={styles.logoo}>
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
                HOME<sup className={styles.sup}>1</sup>
              </span>
            </Link>
            <Link href="/#about" onClick={close}>
              <span>
                ABOUT<sup className={styles.sup}>2</sup>
              </span>
            </Link>
            <Link href="/#skills" onClick={close}>
              <span>
                SKILLS<sup className={styles.sup}>3</sup>
              </span>
            </Link>
            <Link href="/#projects" onClick={close}>
              <span>
                PROJECTS<sup className={styles.sup}>4</sup>
              </span>
            </Link>
            <Link href="/#contact" onClick={close}>
              <span>
                CONTACT<sup className={styles.sup}>5</sup>
              </span>
            </Link>
            <div className={styles.button} onClick={close}>
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

      <div
        className={`${styles["scroll-to-top"]} ${
          isVisible ? styles.visible : ""
        }`}
        onClick={open}
      >
        <Burger size="lg" opened={opened} aria-label="Toggle navigation" />
      </div>
    </>
  );
}
