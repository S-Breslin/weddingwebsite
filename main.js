let logButton = document.getElementById("login");
let imgContainer = document.getElementById("background");
let content = document.getElementById("content");



let showImage = () => {
    content.style.visibility = "hidden";
    gsap.to("#blur", {
        opacity: 0,
        duration: 5, ease: "slow(0.3, 2)"
    });
    window.location.href = "./home.html";

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
