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


function renderBasket(typeOfDish, indexOfAllDishes) {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = ``;

    for (let i = 0; i < basket.length; i++) {
        basketRef.innerHTML += getBasketTemplate(i, typeOfDish, indexOfAllDishes);
    }
}


function addToBasket(typeOfDish, indexOfAllDishes) {
    if (allDishes[typeOfDish][indexOfAllDishes].amount == 0) {
        allDishes[typeOfDish][indexOfAllDishes].amount++;
        basket.push(allDishes[typeOfDish][indexOfAllDishes]);
        renderBasket(typeOfDish, indexOfAllDishes);
    }
    else {
        return;
    }    
}


function decreaseBasketAmount(typeOfDish, indexOfAllDishes) {
    allDishes[typeOfDish][indexOfAllDishes].amount--;
    renderBasket(typeOfDish, indexOfAllDishes);
}


function increaseBasketAmount(typeOfDish, indexOfAllDishes) {
    allDishes[typeOfDish][indexOfAllDishes].amount++;
    renderBasket(typeOfDish, indexOfAllDishes);
}


function deleteFromBasket(basketIndex, typeOfDish, indexOfAllDishes) {
    allDishes[typeOfDish][indexOfAllDishes].amount = 0;
    basket.splice(basketIndex, 1);
    renderBasket(typeOfDish, indexOfAllDishes);
}