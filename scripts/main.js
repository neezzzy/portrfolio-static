const date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
// you can delete everything below this and remove comment in index.html
gsap.registerPlugin(ScrollTrigger);

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;

  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";

  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1,
      // x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
      ease: 'power3.out',
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

// create
let mm = gsap.matchMedia();
// add a media query. When it matches, the associated function will run
mm.add("(min-width: 760px)", () => {
  // this setup code only runs when viewport is at least 768px wide
  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      // markers: true,
      // first value is the object's start phase
      // second value is scroller start
      // start: "top bottom" default
      start: "top bottom",
      // first value is the object's end phase
      // second value is scroller end
      // start: "bottom top " default
      end: "150% top",
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });

  gsap.to(".project-container", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-description",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".project-image-scroll", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-image-scroll",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});


