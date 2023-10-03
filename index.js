// присваиваю DOM элементы в константы
const card1 = document.getElementById("card1__item")
let priceCard1 = document.getElementById("card1__price")
let amountCard1 = document.getElementById("card1__value")
const decrSumCard1 = document.getElementById("card1__decr")
const incrSumCard1 = document.getElementById("card1__incr")
const reminderCard1 = document.getElementById("card1__reminder").textContent

const card2 = document.getElementById("card2__item")
let priceCard2 = document.getElementById("card2__price")
let amountCard2 = document.getElementById("card2__value")
const decrSumCard2 = document.getElementById("card2__decr")
const incrSumCard2 = document.getElementById("card2__incr")

const card3 = document.getElementById("card3__item")
let priceCard3 = document.getElementById("card3__price")
let amountCard3 = document.getElementById("card3__value")
const decrSumCard3 = document.getElementById("card3__decr")
const incrSumCard3 = document.getElementById("card3__incr")
const reminderCard3 = document.getElementById("card3__reminder").textContent


const checkboxBasketPaynow = document.getElementById("basket-checkbox-payNow")
const totalPrice = document.getElementById("basket-header__totalPrice").textContent
const buttonBasketBuy = document.getElementById("basket__buttonOrder")

// фиксирую цену за 1шт. для каждого из товаров
const priceForOne = {
    card1: 522,
    card2: 10500,
    card3: 494
}

// Присваиваю общую стоимость за позиции исходя из общего количества шт. за товар и его стоимость за 1 шт.
priceCard1.textContent = Number(amountCard1.value) * priceForOne.card1
priceCard2.textContent = Number(amountCard2.value) * priceForOne.card2
priceCard3.textContent = Number(amountCard3.value) * priceForOne.card3

// функция декрементации. передаю в функцию количество шт
function decrementGoodValue(amount) {
    if (amount.value > 1) {
        amount.value = Number(amount.value) - 1;
    } else return
}

// функция инкрементации. передаю в функцию количество шт и количество остатка. если остаток товара не указан - следует передавать Infinity
function incrementGoodValue(amount, remind) {
    if (amount.value < remind) {
        amount.value = Number(amount.value) + 1;
    } else {
        alert(`Ошибка. Осталось ${remind} шт.`)
    }
}

// декрементирую/инкрементирую количество каждой позиции товара
decrSumCard1.addEventListener("click", () => {
    decrementGoodValue(amountCard1);
    priceCard1.textContent = Number(amountCard1.value) * priceForOne.card1;
})

incrSumCard1.addEventListener("click", () => {
    incrementGoodValue(amountCard1, reminderCard1);
    priceCard1.textContent = Number(amountCard1.value) * priceForOne.card1;
})

decrSumCard2.addEventListener("click", () => {
    decrementGoodValue(amountCard2);
    priceCard2.textContent = Number(amountCard2.value) * priceForOne.card2;
})

incrSumCard2.addEventListener("click", () => {
    incrementGoodValue(amountCard2, Infinity);
    priceCard2.textContent = Number(amountCard2.value) * priceForOne.card2;
})

decrSumCard3.addEventListener("click", () => {
    decrementGoodValue(amountCard3);
    priceCard3.textContent = Number(amountCard3.value) * priceForOne.card3;
})

incrSumCard3.addEventListener("click", () => {
    incrementGoodValue(amountCard3, reminderCard1);
    priceCard3.textContent = Number(amountCard3.value) * priceForOne.card3;
})





// Проверяю, нажат ли чекбокс для оплаты сразу
function checkPaynow() {
    if (checkboxBasketPaynow.checked) {
        buttonBasketBuy.textContent = `Оплатить ${totalPrice}`
    } else {
        buttonBasketBuy.textContent = "Заказать"
    }
}

// меняю значение чебокса оплаты сразу
checkboxBasketPaynow.addEventListener("change", () => checkPaynow())
