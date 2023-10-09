import Link from "next/link";
import css from "../styles/Header.module.css";

import { Avatar, Burger, Drawer } from "@mantine/core";
import CloseIcon from "@mui/icons-material/Close";

import { useDisclosure } from "@mantine/hooks";
import RevealMenu from "./RevealMenu";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>
          <Avatar src="logo.png" alt="it's me" size={50} radius={200} />
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
