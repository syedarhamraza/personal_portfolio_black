import { useEffect, useState } from "react";
import styles from "../styles/Hamburger.module.css";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Drawer } from "@mantine/core";
import Link from "next/link";

import { useDisclosure } from "@mantine/hooks";

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
        <div className={styles.drawer}>
          <Avatar src="logo.png" alt="it's me" size={150} radius={200} />
          <Link href="/" onClick={close}>
            <span>HOME</span>
          </Link>
          <Link href="/#about" onClick={close}>
            <span>ABOUT</span>
          </Link>
          <Link href="/#skills" onClick={close}>
            <span>SKILLS</span>
          </Link>
          <Link href="/#projects" onClick={close}>
            <span>PROJECTS</span>
          </Link>
          <Link href="/#contact" onClick={close}>
            <span>CONTACT</span>
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
      </Drawer>

      <div
        className={`${styles["scroll-to-top"]} ${
          isVisible ? styles.visible : ""
        }`}
        onClick={open}
      >
        <MenuIcon color="dark" sx={{ fontSize: 40, cursor: "pointer" }} />
      </div>
    </>
  );
}
