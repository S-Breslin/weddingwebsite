let logButton = document.getElementById("login");
let imgContainer = document.getElementById("background");
let content = document.getElementById("content");

let showImage = () => {
    imgContainer.style.backgroundImage = "url(./images/The_Happy_Couple.jpg)";
    content.style.visibility = "hidden";

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