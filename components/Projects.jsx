import css from "@/styles/Projects.module.css";
import { Tabs } from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group, rem } from "@mantine/core";
import Reveal from "./Reveal";

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
                        <Image
                          src="https://i.ibb.co/HGp0nMb/readme-md.png"
                          height={250}
                          alt="porfolio sanity"
                        />
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
                        With Fjord Tours you can explore more of the magical
                        fjord landscapes with tours and activities on and around
                        the fjords of Norway
                      </Text>

                      <div className={css.buttons}>
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
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <Image
                          src="https://i.ibb.co/XtcKfJ5/purple.png"
                          height={250}
                          alt="Purple portfolio"
                        />
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical
                        fjord landscapes with tours and activities on and around
                        the fjords of Norway
                      </Text>

                      <div className={css.buttons}>
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
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <Image
                          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                          height={250}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical
                        fjord landscapes with tours and activities on and around
                        the fjords of Norway
                      </Text>

                      <div className={css.buttons}>
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
                        <Image
                          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                          height={250}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical
                        fjord landscapes with tours and activities on and around
                        the fjords of Norway
                      </Text>

                      <div className={css.buttons}>
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
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <Image
                          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                          height={250}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical
                        fjord landscapes with tours and activities on and around
                        the fjords of Norway
                      </Text>

                      <div className={css.buttons}>
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
                      </div>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="xs">
                      <Card.Section>
                        <Image
                          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                          height={250}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Group position="left" spacing="xs">
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                          <Badge color="dark" radius="xs" variant="filled">
                            On Sale
                          </Badge>
                        </Group>
                      </Group>

                      <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical
                        fjord landscapes with tours and activities on and around
                        the fjords of Norway
                      </Text>
                      <div className={css.buttons}>
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
