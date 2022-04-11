import React from "react";
import c from "../styles/components/NavBar.module.scss";
import sections from "../styles/Home.module.scss";
import classNames from "classnames";

const titles = {
  [sections.intro]: "INTRODUCTION",
  [sections.about]: "ABOUT",
  [sections.skills]: "SKILLS",
  [sections.contact]: "CONTACT",
};

export default function NavBar({ activeElement }) {
  const targetClass = activeElement?.className;
  const title = titles[targetClass];

  // className={classNames({ [c.active]: targetClass === sections.about })}

  return (
    <div className={c.NavBar}>
      <span>{title}</span>

      <span>SCROLL</span>
    </div>
  );
}
