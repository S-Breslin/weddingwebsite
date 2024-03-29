let tl = gsap.timeline();

tl.to("#type", {text: "Coming Soon...", ease:"none", duration: 2.5})
    .to("#type", {display: "none", ease:"none", duration: 2.5})
    .to("#monkies", {display:"block", ease:"none", duration: 0.1})
    .to("#monkies", {opacity: 1, ease: "slow(0.3, 2)", duration: 2.5});