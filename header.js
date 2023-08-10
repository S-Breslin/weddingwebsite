let menu = document.getElementById("menu");
let menuOpen = document.getElementById("menu_button")
let menuClose = document.getElementById("menu_close");

menuOpen.addEventListener('click', ()=> {
    menu.style.display = 'flex';  
})
menuClose.addEventListener('click', ()=> {
    menu.style.display = 'none'; 
})

