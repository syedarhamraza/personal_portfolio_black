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
import { Avatar } from "@mantine/core";

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
        {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
        <div className={classes.inner}>
          <div className={css.content}>
            <div className={css.leftgroup}>
              <div className={css.logo}>
                <Avatar src="logo2.jpg" alt="it's me" size={80} radius={200} />
              </div>
              <h3 className={css.desc}>Web Developer</h3>
            </div>

            <div className={css.groups}>
              <div className={css.groupinfo}>
                <h2>SITE LINKS</h2>
                <p>ABOUT</p>
                <p>CONTACT</p>
                <p>TERMS OF USE</p>
                <p>PRIVACY POLICY</p>
              </div>
              <div className={css.groupinfo}>
                <h2>USEFUL LINKS</h2>
                <p>STORYSET</p>
                <p>NEXTJS</p>
                <p>MANTINE CORE</p>
                <p>MATERIAL UI</p>
              </div>
              <div className={css.groupinfo}>
                <h2>WEBSITES</h2>
                <p>SHOPZEN</p>
                <p>DASHBOARD</p>
                <p>FUDO</p>
                <p>ADMIN</p>
              </div>
            </div>
          </div>
        </div>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © 2023 Arhamraza. All rights reserved.
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandGithub size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandWhatsapp size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
    </div>
  );
}
