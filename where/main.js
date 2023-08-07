let accommodation = document.getElementById("f_accommodation");
let accommodationText = document.getElementById("f_accommodation_text");

let activity = document.getElementById("f_activities");
let activityText = document.getElementById("f_activities_text");

let food = document.getElementById("f_food");
let foodText = document.getElementById("f_food_text");

let showFood = () => {
    food.style.height = '100%';
    foodText.style.visibility = 'visible';
    activity.style.display = 'none';
    accommodation.style.display = 'none';
}

let hideFood = () => {
    food.style.height = '5dvh';
    foodText.style.visibility = 'hidden';
    activity.style.display = 'flex';
    accommodation.style.display = 'flex';
}

food.onclick = showFood;

food.ondblclick = hideFood;

let showAccommodation = () => {
    accommodation.style.height = '100%';
    accommodationText.style.visibility = 'visible';
    activity.style.display = 'none';
    food.style.display = 'none';
}
let hideAccommodations = () => {
    accommodation.style.height = '5dvh';
    accommodationText.style.visibility = 'hidden';
    activity.style.display = 'flex';
    food.style.display = 'flex';
}
accommodation.onclick = showAccommodation;
accommodation.ondblclick = hideAccommodations;

let showActivity = () => {
    activity.style.height = '100%';
    activityText.style.visibility = 'visible';
    food.style.display = 'none';
    accommodation.style.display = 'none';
}

let hideActivity = () => {
    activity.style.height = '5dvh';
    activityText.style.visibility = 'hidden';
    food.style.display = 'flex';
    accommodation.style.display = 'flex';
}

activity.onclick = showActivity;
activity.ondblclick = hideActivity;

/*let tl = gsap.timeline({
    duration: 1,
    delay: 0.5
});


tl.from(".object", {
    x:"100vw",
    stagger: 0.5
})

tl.to("#test2", {
    opacity: 0
})
*/
/*
gsap.to ("#test3", {
    scrollTrigger: {
        trigger: "#test3",
        markers: true,
        start: "center center",
        end:"top 100px",
        scrub: true,
        pin: true
    },
    x:400,
    rotation:360,
    duration: 10
})
*/


gsap.utils.toArray(".where_page").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        markers: true,
        scub: 1,
        snap: {
            snapTo: 1,
            duration: 1,
            ease: "sine"
        }
    });    
});

/*

var tl  = gsap.timeline ();
let duration = 1.5;
let h1 = [
    document.getElementById("wH1"),
    document.getElementById("wH2"),
    document.getElementById("wH3")
];

function init() {
    tl.fromTo(h1, {scale:0}, {duration:duration, scale:6, ease:"slow(0.5, 0.8)", stagger: duration})
    .from(h1, {opacity:0, duration:duration, ease:"slow(0.5, 0.8, true)", stagger: duration}, "<")
    .to(window, {duration: duration, scrollTo: "#ferra"})    
    .to("#type", {text: "Ferragudo", ease:"none", duration: 2.5})
    .from("#text", {opacity:0, duration: duration});
}

window.addEventListener("load", function(event){
    console.log("load");
    gsap.set("#demo", {autoAlpha: 1});
    init();
})

.to("#type", {text: "Ferragudo", ease:"none", duration: 2.5});
*/

var tl = gsap.timeline ();
let duration = 1;

let title = document.getElementById("title");

tl.from(title, {y:"100vh", duration: duration, delay: 0.5,  ease:"power2"})
.from(".top", {x:"100vw", duration: duration, ease:"power2"})
.from("#b1", {y:"50vh", duration: duration,  ease:"power2"})
.from("#b2", {x:"50vw", duration: 1,  ease:"power2"})

var tl1 = gsap.timeline ();

function init() {
    tl1.to("#type", {text: "Ferragudo", ease:"none", duration: 1.5});
    gsap.from('#left', {opacity: 0, duration: 3, delay: 2, ease:"power2"});
    gsap.from('#right_box', {opacity: 0, duration: 3, delay: 3, ease:"power2"});
}
/*
gsap.to("#type", {text: "Ferragudo", ease:"none", duration: 1.5});
gsap.from('#left', {opacity: 0, duration: 3, delay: 2, ease:"power2"});
gsap.from('#right_box', {opacity: 0, duration: 3, delay: 3, ease:"power2"});
*/
window.addEventListener("load", function(event){
    console.log("load");
    gsap.set("#type", {autoAlpha: 1});
    init();
})