document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // Animation for "Hello, I'm <br /> <span>Hassnain Altaf</span>"
  gsap.from(".banner .textBx h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".banner .textBx h2",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.fromTo(".banner .textBx h3", 
    { 
      opacity: 0, 
      text: "" 
    }, 
    { 
      opacity: 1, 
      text: "I'm a React.js Developer.", 
      duration: 3, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".banner .textBx h3",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
      repeat: -1, // This makes the animation repeat infinitely
    repeatDelay: .2 // Optional: Adds a delay between repetitions
    }
  );
  

  // Animation for About section
  gsap.from(".about .contentBx", {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for Services section
  gsap.from(".servicesBx", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".services",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for Work section
  gsap.from(".workBx", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".work",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for Testimonial section
  gsap.from(".testimonialBx", {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for Contact section
  gsap.from(".contactInfo", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".formBx", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });
});
















// GSAP Animation for the menu
gsap.fromTo(
  ".menu",
  {
    opacity: 0,
    y: -20
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    paused: true,
    scrollTrigger: {
      trigger: ".menu",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse"
    }
  }
);

// GSAP Animation for the toggle button
gsap.fromTo(
  ".toggle",
  {
    scale: 0.8,
    opacity: 0,
    
  },
  {
    scale: 1,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y:20,
    scrollTrigger: {
      trigger: ".toggle",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse"
    }
  }
);



