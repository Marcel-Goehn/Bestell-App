function getMainDishesTemplate(index) {
    return `<div onclick="addToBasket(${mainDishes[index].amount, index})" class="menu mt-2">
                    <h3>${mainDishes[index].name}</h3>
                    <div class="mt-2">${mainDishes[index].ingredients}</div>
                    <div class="mt-2 price">${mainDishes[index].price}€</div>
                    <svg class="add-to-basket" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF7F00"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>`
}


function getDessertDishesTemplate(index) {
    return `<div onclick="addToBasket(${dessertDishes[index].amount, index})" class="menu mt-2">
                    <h3>${dessertDishes[index].name}</h3>
                    <div class="mt-2">${dessertDishes[index].ingredients}</div>
                    <div class="mt-2 price">${dessertDishes[index].price}€</div>
                    <svg class="add-to-basket" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF7F00"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>`
}


function getDrinkDishesTemplate(index) {
    return `<div onclick="addToBasket(${drinkDishes[index].amount, index})" class="menu mt-2">
                    <h3>${drinkDishes[index].name}</h3>
                    <div class="mt-2">${drinkDishes[index].ingredients}</div>
                    <div class="mt-2 price">${drinkDishes[index].price}€</div>
                    <svg class="add-to-basket" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF7F00"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>`
}