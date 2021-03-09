const hamburgerIcon = document.querySelector(".hamburger-icon")
const mobileMenu = document.querySelector(".mobile-menu")

hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})