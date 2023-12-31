// в этом файле декларирую константы DOM элементов, для последующего к ним обращения

// основное
export const basketCount = document.getElementById("basket__count")
export const mobileBasketCount = document.getElementById("mobile-basket__count")
export const hideAllCards = document.getElementById("hide__allCards")
export const hideAllMissings = document.getElementById("hide__all-missing")
export const mobileMenu = document.getElementById("mobile-menu")
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
export const userFirstName = document.getElementById("data__firstname")
export const userLastName = document.getElementById("data__lastname")
export const userEmail = document.getElementById("data__email")
export const userEmailError = document.getElementById("data__email-error")
export const userPhone = document.getElementById("data__phone")
export const userPhoneError = document.getElementById("data__phone-error")
export const userINN = document.getElementById("data__inn")
export const userINNError = document.getElementById("data__inn-error")
export const userINNDescription = document.getElementById("data__inn-description")
// baskets 
export const totalPrice = document.getElementById("basket-header__total-price")
export const totalFprice = document.getElementById("basket__fprice")
export const totalDiscount = document.getElementById("basket__discount")
export const checkboxBasketPaynow = document.getElementById("basket-checkbox-payNow")
export const buttonBasketBuy = document.getElementById("basket__button-order")
export const basketCheckAll = document.getElementById("basket__checkAll")
export const basketDeliveryOption = document.getElementById("basket-delivery-option")
export const checkboxConfirmOffer = document.getElementById("confirm__offer")
// модалки
export const modalBackground = document.getElementById("modal-background")
export const modalPayOpen = document.querySelectorAll(".open-modal-pay")
export const modalPayClose = document.getElementById("modal-pay__close")
export const modalSetPay = document.getElementById("set-pay-data")
export const modalSetDelivery = document.getElementById("set-delivery-data")
export const modalDeliveryOpen = document.querySelectorAll(".open-modal-delivery")
export const modalDeliveryClose = document.getElementById("modal-delivery__close")
export const modalRemoveAddress = document.querySelectorAll(".modal-delivery__itemTrash")
// кнопки способа доставки
export const deliveryButtonPikup = document.getElementById("delivery__method-pickup")
export const deliveryButtonCourier = document.getElementById("delivery__method-courier")
export const deliveryMethodPickUp = document.getElementById("delivery-body-method-pickUp")
export const deliveryMethodCourier = document.getElementById("delivery-body-method-courier")
export const defaultMethodDelivery = document.getElementById("delivery__method-pickup1").cloneNode(true)
export const defaultMethodPay = document.getElementById("pay__method1").cloneNode(true)
export const methodDeliveryCurrent = document.querySelectorAll(".delivery__current-method")
export const methodPayCurrent = document.querySelectorAll(".pay-current-method")

// текст способа доставки (может меняться в зависимости от типа доставки)
export const deliveryOption = document.getElementById("delivery-option")


export const buttonRemoveCard = document.querySelectorAll(".card-nav__item-trash")


// чекбоксы выбора доставки в пункт выдачи из модального окна
export const deliveryPick1 = document.getElementById("delivery__method-pickup1")
export const deliveryPick2 = document.getElementById("delivery__method-pickup2")
export const delivery1 = document.getElementById("delivery__method1")
export const delivery2 = document.getElementById("delivery__method2")
export const delivery3 = document.getElementById("delivery__method3")


// чекбоксы выбора оплаты из модального окна
export const pay1 = document.getElementById("pay__method1")
export const pay2 = document.getElementById("pay__method2")
export const pay3 = document.getElementById("pay__method3")
export const pay4 = document.getElementById("pay__method4")