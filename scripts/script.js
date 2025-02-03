function init() {
    renderMainDishes();
    renderDessertDishes();
    renderDrinkDishes();
}


function renderMainDishes() {
    let mainDishesRef = document.getElementById('render_main_dishes');
    mainDishesRef.innerHTML = ``;

    for (let i = 0; i < mainDishes.length; i++) {
        mainDishesRef.innerHTML += getMainDishesTemplate(i);    
    }
}


function renderDessertDishes() {
    let dessertDishesRef = document.getElementById('render_dessert_dishes');
    dessertDishesRef.innerHTML = ``;

    for (let i = 0; i < dessertDishes.length; i++) {
        dessertDishesRef.innerHTML += getDessertDishesTemplate(i);        
    }
}


function renderDrinkDishes() {
    let drinkDishesRef = document.getElementById('render_drink_dishes');
    drinkDishesRef.innerHTML = ``;

    for (let i = 0; i < drinkDishes.length; i++) {
        drinkDishesRef.innerHTML += getDrinkDishesTemplate(i);  
    }
}


/*function addToBasket(indexAmount, basketIndex) {
    if (indexAmount == 0) {
        let pushToBasket = document.getElementById('basket');
        pushToBasket.innerHTML = getBasketTemplate(basketIndex);
        indexAmount++;
    }
    else {
        indexAmount++;
    }
}*/