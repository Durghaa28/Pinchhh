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

//search
const search = document.getElementById("search")
const container = document.getElementById("container")
const h1list = container.querySelectorAll("div")

search.addEventListener("keyup", function () {

    var list = event.target.value.toUpperCase()
    for (count = 0; count < h1list.length; count = count + 1) {
        var productname = h1list[count].querySelector("h1").textContent
        if (h1list[count].textContent.toUpperCase().indexOf(list) < 0) {
            h1list[count].style.display = "none"
        }
        else {
            h1list[count].style.display = "block"
        }
    }
})

//checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
});

function filterProducts() {
    const searchText = search.value.toUpperCase();
    const selectedOccasions = Array.from(document.querySelectorAll('input[name="Occasions"]:checked')).map(cb => cb.value.toUpperCase());
    const selectedColors = Array.from(document.querySelectorAll('input[name="Color"]:checked')).map(cb => cb.value.toUpperCase());
    const selectedArrivals = Array.from(document.querySelectorAll('input[name="Arrival"]:checked')).map(cb => cb.value.toUpperCase());

    h1list.forEach((item) => {
        const name = item.querySelector("h1").textContent.toUpperCase();
        const text = item.textContent.toUpperCase();

        const matchesSearch = name.includes(searchText);
        const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.some(o => text.includes(o));
        const matchesColor = selectedColors.length === 0 || selectedColors.some(c => text.includes(c));
        const matchesArrival = selectedArrivals.length === 0 || selectedArrivals.some(a => text.includes(a));

        if (matchesSearch && matchesOccasion && matchesColor && matchesArrival) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

