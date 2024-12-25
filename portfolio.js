const hamburger = document.querySelector('.hamburger');
const nav  = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".nav a").forEach(n => n.addEventListener("click", () =>{
    humburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

document.getElementsByClassName('btn').innerhtml =tar

