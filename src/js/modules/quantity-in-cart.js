import htmlRender from "./render.js"

function showQuantityInCart(quantity = 0, selector) {
    htmlRender(quantity, selector)
    if (quantity) {
        if(selector.classList.contains('hidden')) {
            selector.classList.remove('hidden')
        }
    } else {
        if(!selector.classList.contains('hidden')) {
            selector.classList.add('hidden')
        }
    }
}

export default showQuantityInCart