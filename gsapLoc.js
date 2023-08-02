let button = document.getElementById('tile');

gsap.to(".container", {
    visibility: "visible",
    duration: 2,
    delay: 2
});

//button.onclick = gsap.to(window, {duration: 2, scrollTo:"#things"});


function scene1(){
    var tl  = gsap.timeline ();
    let duration = 1.5;

    tl.to("#head", {text: "Ferragudo", duration:duration, ease:"none"})
    .from(".dest_text", {opacity:0, duration:3});

    return tl;
}

function scene2(){
    var tl  = gsap.timeline ();
    tl.to("#next", {delay: 3, duration:0.5, opacity: 1});

    return tl;
}

let master = gsap.timeline ()
    .add(scene1())
    .add(scene2())

gsap.to("#arrow", {y:"8px", duration: 0.75, yoyo:true, repeat: -1});    

ScrollTrigger.create({
        trigger: "#ferra",
        start: "top center",
        end: "bottom 100vh",
        onEnter: () => master.play()
    })

ScrollTrigger.create({
        trigger: "#ferra",
        start: "top bottom",
        onLeaveBack: () => master.pause(0)
    })

    window.addEventListener("load", function(event){
        console.log(load);
        gsap.set("#ferra", {autoAlpha: 1});
        master.pause(0);
    })