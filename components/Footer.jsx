//INternal Imports
import css from "@/styles/Footer.module.css";

//External Imports
import { Container } from "@mantine/core";
import { createStyles, Text, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(100),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <div className={css.container}>
      <div className={classes.footer}>
        <div className={classes.inner}>
          <div className={css.content}>
            <div className={css.leftgroup}>
              <div className={css.logo}>
                <Image src="/logo2.png" alt="it's me" width={80} height={80} />
              </div>
              <h3 className={css.desc}>Syed Arham Raza</h3>
            </div>

            <div className={css.groups}>
              <div className={css.groupinfo}>
                <h2>SITE LINKS</h2>
                <Link href="/#about">
                  <p>ABOUT</p>
                </Link>
                <Link href="/#contact">
                  <p>CONTACT</p>
                </Link>
                <Link href="/termsofuse">
                  <p>TERMS OF USE</p>
                </Link>
                <Link href="/privacypolicy">
                  <p>PRIVACY POLICY</p>
                </Link>
              </div>
              <div className={css.groupinfo}>
                <h2>USEFUL LINKS</h2>
                <Link
                  rel="preload"
                  href="https://storyset.com/online"
                  target="_blank"
                >
                  <p>STORYSET</p>
                </Link>
                <Link rel="preload" href="https://nextjs.org/" target="_blank">
                  <p>NEXTJS</p>
                </Link>
                <Link rel="preload" href="https://mantine.dev/" target="_blank">
                  <p>MANTINE CORE</p>
                </Link>
                <Link
                  rel="preload"
                  as="link"
                  href="https://mui.com/material-ui/"
                  target="_blank"
                >
                  <p>MATERIAL UI</p>
                </Link>
              </div>
              <div className={css.groupinfo}>
                <h2>QUICK LINKS</h2>
                <Link as="terms" rel="preload" href="/termsofuse">
                  <p>TERMS OF USE</p>
                </Link>
                <Link rel="preload" href="/privacypolicy" as="privacy">
                  <p>PRIVACY POLICY</p>
                </Link>
                <Link
                  rel="preload"
                  href="https://fudo.arhamatlas.online/"
                  target="_blank"
                >
                  <p>FUDO</p>
                </Link>
                <Link
                  rel="preload"
                  href="https://admin.arhamatlas.online/"
                  target="_blank"
                >
                  <p>ADMIN</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © 2023 Arhamraza. All rights reserved.
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <Link
              rel="preload"
              href="https://github.com/arhamraza112"
              target="_blank"
            >
              <ActionIcon size="lg">
                <IconBrandGithub size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link
              rel="preload"
              href="https://api.whatsapp.com/send/?phone=923339555742&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <ActionIcon size="lg">
                <IconBrandWhatsapp size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link
              rel="preload"
              href="https://www.instagram.com/_dev_arham/"
              target="_blank"
            >
              <ActionIcon size="lg">
                <IconBrandInstagram size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
          </Group>
        </Container>
      </div>
    </div>
  );
}
