import css from "../styles/Skills.module.css";
import { RingProgress, Tabs, Text } from "@mantine/core";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <>
      <div className={css.container} id="skills">
        <div className={css.skills}>
          <h1 className={css.heading}>SKILLS</h1>
          <p className={css.desc}>WHAT I DO</p>
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
                      : theme.white, // Default background color
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.black, // Default text color
                  border: `3px solid ${theme.black}`, // Default border (black for inactive tabs)
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
                    backgroundColor: theme.black, // Active background color
                    borderColor: "transparent", // No border for active tab
                    color: theme.white, // Active text color
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
                  <div className={css.progress}>
                    <div className={css.left}>
                      <div>
                        <h3>HTML</h3>
                        <RingProgress
                          size={180}
                          sections={[{ value: 85, color: "black" }]}
                          label={
                            <Text
                              color="black"
                              weight={700}
                              align="center"
                              size="xl"
                            >
                              85%
                            </Text>
                          }
                        />
                      </div>
                      <div>
                        <h3>CSS</h3>
                        <RingProgress
                          size={180}
                          sections={[{ value: 70, color: "black" }]}
                          label={
                            <Text
                              color="black"
                              weight={700}
                              align="center"
                              size="xl"
                            >
                              70%
                            </Text>
                          }
                        />
                      </div>
                      <div>
                        <h3>JAVASCRIPT</h3>
                        <RingProgress
                          size={180}
                          sections={[{ value: 30, color: "black" }]}
                          label={
                            <Text
                              color="black"
                              weight={700}
                              align="center"
                              size="xl"
                            >
                              30%
                            </Text>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </Tabs.Panel>
              <Tabs.Panel value="second" pt="xs">
                <Reveal>
                  <div className={css.progress}>
                    <div className={css.left}>
                      <div>
                        <h3>C++</h3>
                        <RingProgress
                          size={180}
                          sections={[{ value: 40, color: "black" }]}
                          label={
                            <Text
                              color="black"
                              weight={700}
                              align="center"
                              size="xl"
                            >
                              40%
                            </Text>
                          }
                        />
                      </div>
                      <div>
                        <h3>REACT</h3>
                        <RingProgress
                          size={180}
                          sections={[{ value: 35, color: "black" }]}
                          label={
                            <Text
                              color="black"
                              weight={700}
                              align="center"
                              size="xl"
                            >
                              35%
                            </Text>
                          }
                        />
                      </div>
                      <div>
                        <h3>GITHUB</h3>
                        <RingProgress
                          size={180}
                          sections={[{ value: 60, color: "black" }]}
                          label={
                            <Text
                              color="black"
                              weight={700}
                              align="center"
                              size="xl"
                            >
                              60%
                            </Text>
                          }
                        />
                      </div>
                    </div>
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
