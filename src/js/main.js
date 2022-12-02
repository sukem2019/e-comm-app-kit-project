// Import data
import {categoryList, flashSaleList, productList, superFlashSaleList, megaSaleList, recommendedList} from  "./data/data.js"

// Import function
import htmlRender from "./modules/render.js"
import showNewNotification from "./modules/new-notification.js"
import saleCountDown from "./modules/sale-count-down.js"
import showQuantityInCart from "./modules/quantity-in-cart.js"
import hideWhenScrollUp from "./modules/hide-when-scroll-up.js"
import slide from "./modules/slide.js"
import showCategoryList from "./modules/category-list.js"
import showSaleProducts from "./modules/sale-products-list.js"
import showProducts from "./modules/products-list.js"

// Test
// console.log(categoryList)
// console.log(productList)
// console.log(showNewNotification)
// console.log(showQuantityInCart)
// console.log(123)

// Show new notification
var isNewNotification = true
var notifyElement = document.querySelector('#new-notification')

showNewNotification(isNewNotification,notifyElement)

// Sale counting down
var saleEndTime = "2022/12/06"
var hourElement = document.querySelector('#hour-count-down')
var minuteElement = document.querySelector('#minute-count-down')
var secondElement = document.querySelector('#second-count-down')

saleCountDown(saleEndTime, hourElement, minuteElement, secondElement)

// Show quantity in cart
var quantityInCart = 2
var quantityInCartElement = document.querySelector('#quantity-in-cart')

showQuantityInCart(quantityInCart, quantityInCartElement)

// Hide menu when scroll-up
var hiddenElement = document.querySelector('#menu')

hideWhenScrollUp(hiddenElement)

// SFS slideshow
var slideContainer = document.querySelector('.slide-container')
var slideIndicator = document.querySelector('.slide-indicator')

slide(slideContainer, slideIndicator, superFlashSaleList)

// Render Category list
var categoryElement = document.querySelector('.category__list')

showCategoryList(categoryList, categoryElement)

// Render Flash Sale list
var flashSaleElement = document.querySelector('.FS .sale-list')

showSaleProducts('FS', flashSaleList, flashSaleElement)

// Render Mega Sale list
var megaSaleElement = document.querySelector('.MS .sale-list')

showSaleProducts('MS', megaSaleList, megaSaleElement)

// Render Recommended products
var recommendedElement = document.querySelector('.RP .product-list')
var orderKey = 'recommendedOrder'
var columnClass = 'col m-6'

showProducts(recommendedList, recommendedElement, orderKey, columnClass)
