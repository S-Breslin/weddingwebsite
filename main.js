let logButton = document.getElementById("login");
let imgContainer = document.getElementById("background");
let content = document.getElementById("content");

let loadHome = () => {
    window.location.href = "./home.html";
};

let showImage = () => {
    let tl = gsap.timeline();
    content.style.visibility = "hidden";
    tl.to("#blur", {
        opacity: 0,
        duration: 3, ease: "slow(0.3, 2)", 
    })
        .to("#type", {text: "Welcome...", ease:"none", duration: 2.5
    })
    .to("#type", {
        opacity: 0,
        delay: 1,
        duration: 2, 
        ease: "slow(0.3, 2)", 
        onComplete: loadHome
    });

}


logButton.onclick = showImage;

let banners = document.getElementsByClassName("banner")
let tiles = document.getElementById("tile");

let showBanner = () => {
    banners.array.forEach(element => {
        element.style.visibility = "visible";        
    });
};

tiles.onmouseover
