import css from "@/styles/Contact.module.css";
import { TextInput, Textarea, SimpleGrid, Group, Title } from "@mantine/core";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  return (
    <>
      <section id="contact" className={css.container}>
        <div className={css.contact}>
          <h2 className={css.heading}>CONTACT</h2>
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
                    <h2>contact@arhammastery.dev</h2>
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
                <form ref={form}>
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
                      required
                      label="Name"
                      placeholder="Your name"
                      type="text"
                      name="from_name"
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
                      required
                      label="Email"
                      placeholder="Your email"
                      type="email"
                      name="email_id"
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
                    required
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    name="subject"
                    type="text"
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
                    required
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
                    <button typeof="submit" className={css.btn}>
                      SEND MESSAGE
                    </button>
                  </Group>
                  <Toaster />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
