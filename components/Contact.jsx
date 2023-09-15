import css from "@/styles/Contact.module.css";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  rem,
} from "@mantine/core";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className={css.container} id="contact">
        <div className={css.contact}>
          <h1 className={css.heading}>CONTACT</h1>
          <p className={css.desc}>REACH OUT TO ME</p>
          <div className={css.background}>
            <div className={css.left}>
              <div className={css.contactinfo}>
                <h1 className={css.contactheading}>Contact Information</h1>
                <div className={css.info}>
                  <div className={css.logo}>
                    <AlternateEmailIcon sx={{ fontSize: 35 }} />
                  </div>
                  <div className={css.link}>
                    <h3 className={css.subhead}>Email</h3>
                    <h2>arhamraza399@gmail.com</h2>
                  </div>
                </div>
                <div className={css.info}>
                  <div className={css.logo}>
                    <PhoneIcon sx={{ fontSize: 35 }} />
                  </div>
                  <div className={css.link}>
                    <h3 className={css.subhead}>Phone</h3>
                    <h2>+92 333 9555 742</h2>
                  </div>
                </div>
                <div className={css.info}>
                  <div className={css.logo}>
                    <FmdGoodIcon sx={{ fontSize: 35 }} />
                  </div>
                  <div className={css.link}>
                    <h3 className={css.subhead}>Location</h3>
                    <h2>Islamabad, Pakistan</h2>
                  </div>
                </div>
                <div className={css.info}>
                  <div className={css.logo}>
                    <WbSunnyIcon sx={{ fontSize: 35 }} />
                  </div>
                  <div className={css.link}>
                    <h3 className={css.subhead}>Working Hours</h3>
                    <h2>4PM to 10PM</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={css.right}>
              <div className={css.form}>
                <form>
                  <Title
                    order={2}
                    size="h1"
                    sx={(theme) => ({
                      fontFamily: `Oswald, ${theme.fontFamily}`,
                    })}
                    weight={900}
                    align="center"
                  >
                    Get in touch
                  </Title>

                  <SimpleGrid
                    cols={2}
                    mt="xl"
                    breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                  >
                    <TextInput
                      label="Name"
                      placeholder="Your name"
                      name="name"
                      variant="filled"
                      styles={(theme) => ({
                        input: {
                          borderRadius: "0", // Set border-radius to 0 to remove rounded corners
                          "&:focus-within": {
                            borderColor: theme.colors.dark[7],
                          },
                        },
                      })}
                    />
                    <TextInput
                      label="Email"
                      placeholder="Your email"
                      name="email"
                      variant="filled"
                      styles={(theme) => ({
                        input: {
                          borderRadius: "0", // Set border-radius to 0 to remove rounded corners
                          "&:focus-within": {
                            borderColor: theme.colors.dark[7],
                          },
                        },
                      })}
                    />
                  </SimpleGrid>

                  <TextInput
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    name="subject"
                    variant="filled"
                    styles={(theme) => ({
                      input: {
                        borderRadius: "0", // Set border-radius to 0 to remove rounded corners
                        "&:focus-within": {
                          borderColor: theme.colors.dark[7],
                        },
                      },
                    })}
                  />
                  <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    styles={(theme) => ({
                      input: {
                        borderRadius: "0", // Set border-radius to 0 to remove rounded corners
                        "&:focus-within": {
                          borderColor: theme.colors.dark[7],
                        },
                      },
                    })}
                  />

                  <Group position="center" mt="xl">
                    <Link href="#">
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
                        SEND MESSAGE
                      </Button>
                    </Link>
                  </Group>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
