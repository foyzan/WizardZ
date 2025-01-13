function section1() {
  let gtl = gsap.timeline();

  gtl.from(".logo, #navLinks li a, #navBtn", {
    y: -30,
    duration: 0.8,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    clearProps: "scale, rotate",
  });

  gtl.from("#hero .left h1", {
    x: -100,
    duration: 1,
    opacity: 0,
  });

  gtl.from("#hero .left h4", {
    x: -100,
    duration: 0.5,
    opacity: 0,
  });
  gtl.from(".heroBtn", {
    x: -50,
    duration: 0.3,
    opacity: 0,
  });
  gtl.from(
    "#hero .right img",
    {
      x: 100,
      duration:1,
      opacity: 0,
    },
    "-=1.3"
  );
}

section1()
