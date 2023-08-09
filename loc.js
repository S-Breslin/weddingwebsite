let band = [];

band[0] = document.getElementById("cave");
band[1] = document.getElementById("slide");
band[2] = document.getElementById("sand");
band[3] = document.getElementById("zoo");
band[4] = document.getElementById("golf");
band[5] = document.getElementById("kayak");


let text = [
    document.getElementById("caves_text"),
    document.getElementById("slide_text"),
    document.getElementById("sand_text"),
    document.getElementById("zoo_text"),
    document.getElementById("golf_text"),
    document.getElementById("kayak_text")
];

let back = [
    document.getElementById("back_cave"),
    document.getElementById("back_slide"),
    document.getElementById("back_sand"),
    document.getElementById("back_zoo"),
    document.getElementById("back_golf"),
    document.getElementById("back_kayak")
]
for(let i=0; i<band.length; i++) {
    band[i].addEventListener('mouseover', () => {
        text[i].style.visibility = 'visible';
        back[i].style.height = ("90%");

    });
    band[i].addEventListener('mouseleave', () => {
        text[i].style.visibility = 'hidden';        
        back[i].style.height = ("15%");
        back[i].style.borderRadius = ("0px 0px 0.3rem 0.3rem");
    });

}