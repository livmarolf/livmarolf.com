const scrollTo = (className) => {
  window.scrollTo({
    top: document.getElementsByClassName(className)[0].offsetTop - 100,
    behavior: "smooth",
  });
};

export { scrollTo };
