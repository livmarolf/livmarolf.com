import React from "react";

const hexButton = ({ href, children, ...props }) => {
  return (
    <a className={c.hexButton} href={href} {...props}>
      <svg
        width="160"
        height="138"
        viewBox="0 0 160 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 68.9997L40.0001 0H120L160 68.9997L120 138H40.0001L0 68.9997Z"
          fill="#222328"
        />
      </svg>
      <div>{children}</div>
    </a>
  );
};

export { hexButton };
