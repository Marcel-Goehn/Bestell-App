let calculatedPrice;
let basketPrice = 0;
let deliveryCosts = 5;
let delivery = false;

function init() {
    renderMainDishes();
    renderDessertDishes();
    renderDrinkDishes();
    hideOrShowOrderDishes();
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


function hideOrShowOrderDishes() {
    if (basket.length == 0) {
        document.getElementById('order_dishes').classList.remove('d_none');
        document.getElementById('horizontal_break').classList.add('d_none');
        document.getElementById('checkout').classList.add('d_none');
    }
    else {
        document.getElementById('order_dishes').classList.add('d_none');
        document.getElementById('horizontal_break').classList.remove('d_none');
        document.getElementById('checkout').classList.remove('d_none');
    }
}


function addToBasket(typeOfDish, indexOfAllDishes) {
    if (allDishes[typeOfDish][indexOfAllDishes].amount == 0) {
        allDishes[typeOfDish][indexOfAllDishes].amount++;
        basket.push(allDishes[typeOfDish][indexOfAllDishes]);
        hideOrShowOrderDishes();
        renderBasket();
        subtotalPrice();
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
        subtotalPrice();
    }
    else {
        deleteFromBasket(basketIndex);
    }
}


function increaseBasketAmount(basketIndex) {
    basket[basketIndex].amount++;
    renderBasket();
    subtotalPrice();
}


function deleteFromBasket(basketIndex) {
    basket[basketIndex].amount = 0;
    basket.splice(basketIndex, 1);
    hideOrShowOrderDishes();
    renderBasket();
    subtotalPrice()
}


function price(basketIndex) {
    calculatedPrice = basket[basketIndex].amount * basket[basketIndex].price;
    return calculatedPrice.toFixed(2);
}


function subtotalPrice() {
    let subtotal = document.getElementById('subtotal');
    subtotal.innerHTML = ``;

    for (let i = 0; i < basket.length; i++) {
        basketPrice += Number(document.getElementById('price_' + i).innerHTML);
        subtotal.innerHTML = basketPrice.toFixed(2);
        endprice();
    }
    basketPrice = 0;
    renderBasket();
}


function endprice() {
    if (!delivery) {
        let totalPrice = document.getElementById('total');
        let subtotal = document.getElementById('subtotal').innerHTML;
        totalPrice.innerHTML = subtotal;
    }
    else {
        let totalPrice = document.getElementById('total');
        let subtotal = document.getElementById('subtotal').innerHTML;
        let includeDeliveryCosts = Number(subtotal) + deliveryCosts;
        let fixedDeliveryCosts = includeDeliveryCosts.toFixed(2);
        totalPrice.innerHTML = fixedDeliveryCosts;
    }
}


function pickUp() {
    delivery = false;
    let zero = 0;
    zero;
    document.getElementById('delivery').innerHTML = zero;
    endprice();
    renderBasket();
}


function sendToHome() {
    delivery = true;
    deliveryCosts;
    document.getElementById('delivery').innerHTML = deliveryCosts;
    endprice();
    renderBasket();
}


function openBasketDialog() {
    document.getElementById('header').classList.add('d_none');
    document.getElementById('footer').classList.add('d_none');
    document.getElementById('section').classList.add('d_none');
    document.getElementById('basket_button').classList.remove('basket-button-container');
    document.getElementById('aside').classList.remove('hide-aside');
    document.getElementById('close_basket').classList.remove('d_none');
}


function closeBasket() {
    document.getElementById('close_basket').classList.add('d_none');
    document.getElementById('aside').classList.add('hide-aside');
    document.getElementById('basket_button').classList.add('basket-button-container');
    document.getElementById('section').classList.remove('d_none');
    document.getElementById('footer').classList.remove('d_none');
    document.getElementById('header').classList.remove('d_none');
}