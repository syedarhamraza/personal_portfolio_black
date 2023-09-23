import Link from "next/link";
import css from "../styles/Header.module.css";

import { Avatar, Drawer } from "@mantine/core";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useDisclosure } from "@mantine/hooks";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>
          <Avatar src="logo.png" alt="it's me" size={50} radius={200} />
        </div>
        <div className={css.link}>
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
          </Drawer>
        </div>
        <div className={css.button} onClick={open}>
          <MenuIcon color="dark" sx={{ fontSize: 40, cursor: "pointer" }} />
        </div>
      </div>
    </>
  );
}
