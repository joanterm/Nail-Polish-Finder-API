const displayPolishArea = document.querySelector("#display-polish-area")
const searchBar = document.querySelector("#search-bar")
let allNailPolishes = [];



const fetchData = async() => {
    const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish")
    allNailPolishes = await response.json()
    displayPolish(allNailPolishes)
    console.log(allNailPolishes)
}

fetchData();

const displayPolish = (polishes) => {
    const polishInfo = polishes.map((polish) => {
        return `
            <div class="pol bg-yellow-200">
            <img src="${polish.image_link}"/>
            <h1>${polish.brand}</h1>
            </div>
        `
    })//.join("")
    displayPolishArea.innerHTML = polishInfo

}

searchBar.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase() //e.targer.value tells you the value of what youre typing
    const filteredPolish = allNailPolishes.filter(filtPolish => {
        return filtPolish.brand.includes(searchValue)
    })
    
    console.log(filteredPolish)
    displayPolish(filteredPolish)
})


