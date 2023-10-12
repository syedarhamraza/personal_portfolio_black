import css from "@/styles/News.module.css";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function News() {
  return (
    <>
      <div className={css.container}>
        <div className={css.news}>
          <h1 className={css.heading2}>Wait a minute</h1>
          <h4 className={css.subheading}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "All you need is email",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Join now",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              deletionSpeed={90}
            />
          </h4>
          <p className={css.desc2}>
            Welcome to my newsletter, your go-to source for everything related
            to web development. Whether you&apos;re a seasoned web developer or
            just starting your journey, our newsletter is designed to help you
            build and showcase your web development portfolio, stay updated on
            industry trends, and grow your skills
          </p>
          <Link href="https://newsletter.arhamatlas.online/" rel="preload">
            <button className={css.btn}>SUBSCRIBE</button>
          </Link>
        </div>
      </div>
    </>
  );
}
