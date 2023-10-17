import css from "@/styles/Projects.module.css";
import { Tabs } from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group, rem } from "@mantine/core";
import Reveal from "./Reveal";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className={css.container} id="projects">
        <div className={css.projects}>
          <h1 className={css.heading}>PROJECTS</h1>
          <p className={css.desc}>SOME OF MY PROJECTS</p>
          <div className={css.tabs}>
            <Tabs
              allowTabDeactivation
              defaultValue="first"
              unstyled
              styles={(theme) => ({
                tab: {
                  ...theme.fn.focusStyles(),
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.black,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.white,
                  border: `3px solid ${theme.white}`,
                  padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                  cursor: "pointer",
                  fontSize: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  transition:
                    "background-color 0.3s, color 0.3s, border-color 0.3s",
                  marginBottom: "2rem",

                  "&:disabled": {
                    opacity: 0.5,
                    cursor: "not-allowed",
                  },

                  "&:not(:first-of-type)": {
                    borderLeft: 0,
                  },

                  "&[data-active]": {
                    backgroundColor: theme.white,
                    borderColor: "transparent",
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[0]
                        : theme.black,
                  },
                },

                tabIcon: {
                  marginRight: theme.spacing.xs,
                  display: "flex",
                  alignItems: "center",
                },

                tabsList: {
                  display: "flex",
                  justifyContent: "center",
                },
              })}
            >
              <Tabs.List position="center">
                <Tabs.Tab value="first">SET 1</Tabs.Tab>
                <Tabs.Tab value="second">SET 2</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="first" pt="xs">
                <Reveal>
                  <div className={css.card}>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <div className={css.imageContainer}>
                          <Image
                            className={css.image}
                            src="https://i.ibb.co/HGp0nMb/readme-md.png"
                            height={250}
                            alt="my porfolio sanity"
                          />
                          <div className={css.overlay}>
                            <button className={css.overlayButton}>
                              <Link
                                target="_blank"
                                href="https://i.ibb.co/HGp0nMb/readme-md.png"
                              >
                                Fullscreen
                              </Link>
                            </button>
                          </div>
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Sanity Portfolio</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            SANITY
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            NEXTJS
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            TAILWINDCSS
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        A fullstack porfolio made with sanity as a backend with
                        Animations for smooth looks, with everything functional
                        and working.
                      </Text>

                      <div className={css.buttons}>
                        <Link
                          rel="preload"
                          href="https://www.github.com/arhamraza112"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#000000", // White background by default
                                color: "#FFFFFF", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            View
                          </Button>
                        </Link>
                        <Link
                          rel="preload"
                          href="https://main.arhamatlas.online/"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#FFFFFF", // White background by default
                                color: "#000000", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            Live
                          </Button>
                        </Link>
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <div className={css.imageContainer}>
                          <Image
                            className={css.image}
                            src="https://i.ibb.co/XtcKfJ5/purple.png"
                            height={250}
                            alt="Purple portfolio"
                          />
                          <div className={css.overlay}>
                            <button className={css.overlayButton}>
                              <Link
                                target="_blank"
                                href="https://i.ibb.co/XtcKfJ5/purple.png"
                              >
                                Fullscreen
                              </Link>
                            </button>
                          </div>
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Purple Portfolio</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            HTML
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            CSS
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            JAVASCRIPT
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        A Portfolio website made with HTML, CSS and
                        javascript.It uses Bootsrap for components and its fully
                        responsive for mobile
                      </Text>

                      <div className={css.buttons}>
                        <Link
                          rel="preload"
                          href="https://www.github.com/arhamraza112"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#000000", // White background by default
                                color: "#FFFFFF", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            View
                          </Button>
                        </Link>
                        <Link
                          rel="preload"
                          href="https://vanilla-portfolio-eight.vercel.app/"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#FFFFFF", // White background by default
                                color: "#000000", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            Live
                          </Button>
                        </Link>
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <div className={css.imageContainer}>
                          <Image
                            className={css.image}
                            src="https://i.ibb.co/f8gnH64/Screenshot-1.png"
                            height={250}
                            alt="Shopzen"
                          />
                          <div className={css.overlay}>
                            <button className={css.overlayButton}>
                              <Link
                                target="_blank"
                                href="https://i.ibb.co/f8gnH64/Screenshot-1.png"
                              >
                                Fullscreen
                              </Link>
                            </button>
                          </div>
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>ShopZen Dashboard</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            MONGODB
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            NEXTJS
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            TAILWINDCSS
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        A Admin dashboard made to manage e-commerce websites. It
                        uses MongoDB as a database and TailwindsCSS for styling
                      </Text>

                      <div className={css.buttons}>
                        <Link
                          rel="preload"
                          href="https://www.github.com/arhamraza112"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#000000", // White background by default
                                color: "#FFFFFF", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            View
                          </Button>
                        </Link>
                        <Link
                          rel="preload"
                          href="https://dashboard.arhamatlas.online/"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#FFFFFF", // White background by default
                                color: "#000000", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            Live
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                </Reveal>
              </Tabs.Panel>
              <Tabs.Panel value="second" pt="xs">
                <Reveal>
                  <div className={css.card}>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <div className={css.imageContainer}>
                          <Image
                            className={css.image}
                            src="https://i.ibb.co/42v37j8/Screenshot-2.png"
                            height={250}
                            alt="E-commerce"
                          />
                          <div className={css.overlay}>
                            <button className={css.overlayButton}>
                              <Link
                                target="_blank"
                                href="https://i.ibb.co/42v37j8/Screenshot-2.png"
                              >
                                Fullscreen
                              </Link>
                            </button>
                          </div>
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>E-commerce</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            MONGODB
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            STYLEDCOMPONENETS
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            NEXTJS
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        Fully Functional Full stack E-commerce website made with
                        NextJS, ReactJS and MongoDB as a database and uses
                        Stripe as checkout
                      </Text>

                      <div className={css.buttons}>
                        <Link
                          rel="preload"
                          href="https://www.github.com/arhamraza112"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#000000", // White background by default
                                color: "#FFFFFF", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            View
                          </Button>
                        </Link>
                        <Link
                          rel="preload"
                          href="https://front.arhamatlas.online/"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#FFFFFF", // White background by default
                                color: "#000000", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            Live
                          </Button>
                        </Link>
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <div className={css.imageContainer}>
                          <Image
                            className={css.image}
                            src="https://i.ibb.co/dgLr3X0/Screenshot-3.png"
                            height={250}
                            alt=" AdminDashboard"
                          />
                          <div className={css.overlay}>
                            <button className={css.overlayButton}>
                              <Link
                                target="_blank"
                                href="https://i.ibb.co/dgLr3X0/Screenshot-3.png"
                              >
                                Fullscreen
                              </Link>
                            </button>
                          </div>
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Admin Dashboard</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            PlANETSCALE
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            NEXTJS
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            SHADCN
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        Admin Dasboard made to manage e-commerce websites using
                        Planetscale and MySQL as database and clerk as Auth as
                        well as TailWindcss
                      </Text>

                      <div className={css.buttons}>
                        <Link
                          rel="preload"
                          href="https://www.github.com/arhamraza112"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#000000", // White background by default
                                color: "#FFFFFF", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            View
                          </Button>
                        </Link>
                        <Link
                          rel="preload"
                          href="https://admin.arhamatlas.online/"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#FFFFFF", // White background by default
                                color: "#000000", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            Live
                          </Button>
                        </Link>
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <div className={css.imageContainer}>
                          <Image
                            className={css.image}
                            src="https://i.ibb.co/tz3RcHb/Screenshot-10.png"
                            height={250}
                            alt="Fudo"
                          />
                          <div className={css.overlay}>
                            <button className={css.overlayButton}>
                              <Link
                                target="_blank"
                                href="https://i.ibb.co/tz3RcHb/Screenshot-10.png"
                              >
                                Fullscreen
                              </Link>
                            </button>
                          </div>
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Fudo Application</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            SANITY
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            NEXTJS
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            CSSMODULES
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        Comprehensive food app built with React, Next, and
                        Sanity, featuring a customizable menu. With many pages
                        and fast speed.
                      </Text>
                      <div className={css.buttons}>
                        <Link
                          rel="preload"
                          href="https://www.github.com/arhamraza112"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#000000", // White background by default
                                color: "#FFFFFF", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            View
                          </Button>
                        </Link>
                        <Link
                          rel="preload"
                          href="https://fudo.arhamatlas.online/"
                          target="_blank"
                        >
                          <Button
                            variant="outline"
                            color="dark"
                            radius="xs"
                            size="md"
                            styles={(theme) => ({
                              root: {
                                backgroundColor: "#FFFFFF", // White background by default
                                color: "#000000", // Black text by default
                                border: "2px solid #000000", // Black border by default
                                height: rem(42),
                                marginTop: "1rem",
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                transition:
                                  "background-color 0.3s, color 0.3s, border 0.3s", // Add a transition for a smooth hover effect
                                "&:not([data-disabled])": {
                                  "&:hover": {
                                    backgroundColor: "#FFFFFF", // Black background on hover
                                    color: "#000000", // White text on hover
                                  },
                                },
                              },
                              leftIcon: {
                                marginRight: theme.spacing.md,
                              },
                            })}
                          >
                            Live
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                </Reveal>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
