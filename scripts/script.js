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


function renderBasket(typeOfDish, basketIndex) {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = ``;

    for (let i = 0; i < basket.length; i++) {
        basketRef.innerHTML += getBasketTemplate(i, typeOfDish, basketIndex);
    }
}


function addToBasket(typeOfDish, basketIndex) {
    if (allDishes[typeOfDish][basketIndex].amount == 0) {
        allDishes[typeOfDish][basketIndex].amount++;
        basket.push(allDishes[typeOfDish][basketIndex]);
        renderBasket(typeOfDish, basketIndex);
    }
    else {
        return;
    }    
}


function decreaseBasketAmount(index, typeOfDish, basketIndex) {
    basket[index].amount--;
    allDishes[typeOfDish][basketIndex].amount--;
    renderBasket();
}


function increaseBasketAmount(index, typeOfDish, basketIndex) {
    basket[index].amount++;
    allDishes[typeOfDish][basketIndex].amount++;
    renderBasket();
}


function deleteFromBasket(index, typeOfDish, basketIndex) {
    basket.splice(index, 1);
    allDishes[typeOfDish][basketIndex].amount = 0;
    renderBasket();
}