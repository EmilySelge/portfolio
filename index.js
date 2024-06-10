const name = "Hey there! I'm Emily.";
const h1 = document.querySelector("h1")

let i = 0;

function typewriter() {
    if (i < name.length) {
        h1.innerHTML += name[i]
        i++
        setTimeout(typewriter, 120)
    }
}


window.addEventListener("load", () => {
    setTimeout(typewriter, 600)
})

const navBtn = document.querySelector(".nav-btn")
const mobileMenu = document.querySelector("#menu")
const mobileLinks = document.querySelectorAll(".mobile-a")

navBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open-mobile-menu")
})


for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener("click", () => {
        mobileMenu.classList.toggle("open-mobile-menu")
    })
}
