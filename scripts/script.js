function init() {
    renderMainDishes();
    renderDessertDishes();
    renderDrinkDishes();
    renderBasket();
}


function renderMainDishes() {
    let mainDishesRef = document.getElementById('render_main_dishes');
    mainDishesRef.innerHTML = ``;

    for (let i = 0; i < allDishes.mainDishes.length; i++) {
        mainDishesRef.innerHTML += getMainDishesTemplate(i);    
    }
}


function renderDessertDishes() {
    let dessertDishesRef = document.getElementById('render_dessert_dishes');
    dessertDishesRef.innerHTML = ``;

    for (let i = 0; i < allDishes.dessertDishes.length; i++) {
        dessertDishesRef.innerHTML += getDessertDishesTemplate(i);        
    }
}


function renderDrinkDishes() {
    let drinkDishesRef = document.getElementById('render_drink_dishes');
    drinkDishesRef.innerHTML = ``;

    for (let i = 0; i < allDishes.drinkDishes.length; i++) {
        drinkDishesRef.innerHTML += getDrinkDishesTemplate(i);  
    }
}


function renderBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = ``;

    for (let i = 0; i < basket.length; i++) {
        basketRef.innerHTML += getBasketTemplate(i);
    }
}


function addToBasket(typeOfDish, indexOfAllDishes) {
    if (allDishes[typeOfDish][indexOfAllDishes].amount == 0) {
        allDishes[typeOfDish][indexOfAllDishes].amount++;
        basket.push(allDishes[typeOfDish][indexOfAllDishes]);
        renderBasket();
    }
    else {
        allDishes[typeOfDish][indexOfAllDishes].amount++;
        renderBasket();
    }    
}


function decreaseBasketAmount(basketIndex) {
    if (basket[basketIndex].amount >= 2) {
        basket[basketIndex].amount--;
        renderBasket();
    }
    else {
        deleteFromBasket(basketIndex);
    }    
}


function increaseBasketAmount(basketIndex) {
    basket[basketIndex].amount++;
    //increasePrice(basketIndex);
    renderBasket();
}


function deleteFromBasket(basketIndex) {
    basket[basketIndex].amount = 0;
    basket.splice(basketIndex, 1);
    renderBasket();
}


/*function increasePrice(basketIndex) {
    let calculatedPrice = basket[basketIndex].price * basket[basketIndex].amount;
    //basket[basketIndex].price *= basket[basketIndex].amount;
    console.log(allDishes.mainDishes[0].price);
    console.log(calculatedPrice);
    
}*/