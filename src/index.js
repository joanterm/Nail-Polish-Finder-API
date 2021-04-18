const displayPolishArea = document.querySelector("#display-polish-area")
const searchBar = document.querySelector("#search-bar")
const nailPolishAPI = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish"



let allNailPolishes = [];
const fetchData = async() => {
    const response = await fetch(nailPolishAPI)
    allNailPolishes = await response.json()
    displayPolish(allNailPolishes)
    console.log(allNailPolishes)
}
fetchData();


const displayPolish = (polishes) => {
    const polishInfo = polishes.map((polish) => {
        return `
                <div class="bg-white border border-pink-100 shadow-lg p-4 m-4 w-72">
                    <img src="${polish.image_link}" class="object-scale-down h-48 w-full"/>
                    <div class="text-center font-medium mt-2">
                        <h1>${polish.brand.toUpperCase()}</h1>
                        <p>$ ${polish.price}</p>
                        <button class="bg-pink-100 hover:bg-pink-200 mt-4 px-4 py-2 rounded-md"><a href=${polish.product_link}>SHOP</button>
                    </div>
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

