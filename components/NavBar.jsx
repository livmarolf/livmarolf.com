import React from "react";
import c from "../styles/components/NavBar.module.scss";
import s from "../styles/Home.module.scss";
import { scrollTo } from "../utils/scroll-to";

const titles = {
  [s.intro]: "INTRO",
  [s.about]: "ABOUT",
  [s.skills]: "SKILLS",
  [s.contact]: "CONTACT",
};

const Indicator = ({ active = false, ...props }) => (
  <svg
    {...props}
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 6.38692L10 1.71191L18.5 6.38692V15.6131L10 20.2881L1.5 15.6131L1.5 6.38692Z"
      stroke="#D7D7D7"
      strokeWidth="3"
      fill={active ? "#D7D7D7" : "none"}
    />
  </svg>
);

export default function NavBar({ activeElement }) {
  const currentSection = activeElement?.className;
  const title = titles[currentSection];

  const sections = Object.keys(titles);
  // sections = [s.intro, s.about, s.skills, s.contact]

  const nextSection = sections[sections.indexOf(currentSection) + 1];

  return (
    <div className={c.NavBar}>
      <span>{title}</span>
      <span className={c.indicators}>
        {sections.map((section) => (
          <Indicator
            key={section}
            active={currentSection === section}
            onClick={() => scrollTo(section)}
          />
        ))}
      </span>
      <span
        style={{
          opacity: !nextSection ? 0 : 1,
          pointerEvents: !nextSection ? "none" : "",
        }}
        onClick={() => scrollTo(nextSection)}
      >
        SCROLL
      </span>
    </div>
  );
}
