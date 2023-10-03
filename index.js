// присваиваю DOM элементы в константы
const card1 = document.getElementById("card1__item")
let priceCard1 = document.getElementById("card1__price")
let sumCard1 = document.getElementById("card1__value")
const decrSumCard1 = document.getElementById("card1__decr")
const incrSumCard1 = document.getElementById("card1__incr")



// декрементирую 
decrSumCard1.addEventListener("click", () => {
    if (sumCard1.value > 1) {
        sumCard1.value = Number(sumCard1.value) - 1
    } else {
        card1.style.display = "none"
    }
})

incrSumCard1.addEventListener("click", () => {
    sumCard1.value = Number(sumCard1.value) + 1;
    priceCard1.textContent = Number(priceCard1.textContent) + 522;
})


const checkboxBasketPaynow = document.getElementById("basket-checkbox-payNow")
const totalPrice = document.getElementById("basket-header__totalPrice").textContent
const buttonBasketBuy = document.getElementById("basket__buttonOrder")

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


