function getMainDishesTemplate(index) {
    return `<div onclick="addToBasket('mainDishes', ${index})" class="menu transitions mt-2">
                    <h3>${allDishes.mainDishes[index].name}</h3>
                    <div class="mt-2">${allDishes.mainDishes[index].ingredients}</div>
                    <div class="mt-2 price">${allDishes.mainDishes[index].price.toFixed(2)}€</div>
                    <svg class="add-to-basket" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF7F00"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>`
}


function getDessertDishesTemplate(index) {
    return `<div onclick="addToBasket('dessertDishes', ${index})" class="menu transitions mt-2">
                    <h3>${allDishes.dessertDishes[index].name}</h3>
                    <div class="mt-2">${allDishes.dessertDishes[index].ingredients}</div>
                    <div class="mt-2 price">${allDishes.dessertDishes[index].price.toFixed(2)}€</div>
                    <svg class="add-to-basket" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF7F00"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>`
}


function getDrinkDishesTemplate(index) {
    return `<div onclick="addToBasket('drinkDishes', ${index})" class="menu transitions mt-2">
                    <h3>${allDishes.drinkDishes[index].name}</h3>
                    <div class="mt-2">${allDishes.drinkDishes[index].ingredients}</div>
                    <div class="mt-2 price">${allDishes.drinkDishes[index].price.toFixed(2)}€</div>
                    <svg class="add-to-basket" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF7F00"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>`
}


function getBasketTemplate(basketIndex) {
    return `<tr class="mt-3">
                <th>${basket[basketIndex].name}</th>
            </tr>
            <tr>
                <td><svg onclick="decreaseBasketAmount(${basketIndex})" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF7F00"><path d="M200-440v-80h560v80H200Z"/></svg>${basket[basketIndex].amount}x<svg onclick="increaseBasketAmount(${basketIndex})" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF7F00"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></td>
                <td><span id="price_${basketIndex}">${price(basketIndex)}</span>€</td>
                <td><svg onclick="deleteFromBasket(${basketIndex})" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF7F00"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></td>
            </tr>`
}


function getSetToZeroTemplate() {
    return ``;
}


function getButtonPriceTemplate(endPriceAmount) {
    return ` (${endPriceAmount}€)`;
}