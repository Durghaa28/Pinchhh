// Side Navbar
const menuicon = document.getElementById("menuicon")
const sidenav = document.getElementById("sidenav")
const closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})

