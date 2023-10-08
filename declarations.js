// в этом файле декларирую константы DOM элементов, для последующего к ним обращения
// card 1
export const priceCard1 = document.getElementById("card1__price")
export const fpriceCard1 = document.getElementById("card1__fprice")
export const amountCard1 = document.getElementById("card1__value")
export const decrSumCard1 = document.getElementById("card1__decr")
export const incrSumCard1 = document.getElementById("card1__incr")
export const reminderCard1 = document.getElementById("card1__reminder").textContent
// card 2
export const priceCard2 = document.getElementById("card2__price")
export const fpriceCard2 = document.getElementById("card2__fprice")
export const amountCard2 = document.getElementById("card2__value")
export const decrSumCard2 = document.getElementById("card2__decr")
export const incrSumCard2 = document.getElementById("card2__incr")
// card3
export const priceCard3 = document.getElementById("card3__price")
export const fpriceCard3 = document.getElementById("card3__fprice")
export const amountCard3 = document.getElementById("card3__value")
export const decrSumCard3 = document.getElementById("card3__decr")
export const incrSumCard3 = document.getElementById("card3__incr")
export const reminderCard3 = document.getElementById("card3__reminder").textContent
// данные получателя
export const userFirstName = document.getElementById("data__firstName")
export const userLastName = document.getElementById("data__lastName")
export const userEmail = document.getElementById("data__email")
export const userPhone = document.getElementById("data__phone")
export const userINN = document.getElementById("data__inn")
// baskets 
export const totalPrice = document.getElementById("basket-header__totalPrice")
export const totalFprice = document.getElementById("basket__fprice")
export const totalDiscount = document.getElementById("basket__discount")
export const checkboxBasketPaynow = document.getElementById("basket-checkbox-payNow")
export const buttonBasketBuy = document.getElementById("basket__buttonOrder")
export const basketCheckAll = document.getElementById("basket__checkAll")
export const basketDeliveryOption = document.getElementById("basket-delivery-option")
// модалки
export const modalBackground = document.getElementById("modal-background")
export const modalPayOpen = document.querySelectorAll(".openModal-pay")
export const modalPayClose = document.getElementById("modal-pay__close")
export const modalSetPay = document.getElementById("set-pay-data")
export const modalSetDelivery = document.getElementById("set-delivery-data")
export const modalDeliveryOpen = document.querySelectorAll(".openModal-delivery")
export const modalDeliveryClose = document.getElementById("modal-delivery__close")
// кнопки способа доставки
export const deliveryButtonPikup = document.getElementById("delivery__methodPickup")
export const deliveryButtonCourier = document.getElementById("delivery__methodCourier")
export const deliveryMethodPickUp = document.getElementById("delivery-doby-method-pickUp")
export const deliveryMethodCourier = document.getElementById("delivery-doby-method-courier")
export const defaultMethodDelivery = document.getElementById("delivery__methodPickup1").cloneNode(true)
export const defaultMethodPay = document.getElementById("pay__method1").cloneNode(true)
export const methodDeliveryCurrent = document.querySelectorAll(".delivery__currentMethod")
export const methodPayCurrent = document.querySelectorAll(".pay-currentMethod")

// текст способа доставки (может меняться в зависимости от типа доставки)
export const deliveryOption = document.getElementById("delivery-option")



// чекбоксы выбора доставки в пункт выдачи из модального окна
export const deliveryPick1 = document.getElementById("delivery__methodPickup1")
export const deliveryPick2 = document.getElementById("delivery__methodPickup2")
export const delivery1 = document.getElementById("delivery__method1")
export const delivery2 = document.getElementById("delivery__method2")
export const delivery3 = document.getElementById("delivery__method3")


// чекбоксы выбора оплаты из модального окна
export const pay1 = document.getElementById("pay__method1")
export const pay2 = document.getElementById("pay__method2")
export const pay3 = document.getElementById("pay__method3")
export const pay4 = document.getElementById("pay__method4")