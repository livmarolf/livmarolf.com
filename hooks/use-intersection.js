import { useState, useEffect } from "react";

function useIntersection() {
  const [targets, setTargets] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.table(entries);
        const { target } = entries.find((entry) => entry.isIntersecting) ?? {
          target: null,
        };

        if (!target) return;

        setActive(target);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [targets]);

  return [active, setTargets];
}

export { useIntersection };
