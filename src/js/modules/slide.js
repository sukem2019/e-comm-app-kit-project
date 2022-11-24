import htmlRender from "./render.js"

function slide(slide, indicator, data) {
    var htmlSlideContainer = ''
    var htmlSlideIndicator= ''
    var slideIndex = 0

    for (var i = 0; i < data.length; i++) {
        if (htmlSlideContainer && htmlSlideContainer != '') {
            htmlSlideContainer += `
            <img class="SFS__img slide-item blur hidden" src=${data[i].img()} alt="SFS${data[i].superFlashSaleOrder} img">`
        } else {
            htmlSlideContainer += `<img class="SFS__img slide-item blur hidden" src=${data[i].img()} alt="SFS${data[i].superFlashSaleOrder} img">`
        }
        if (htmlSlideIndicator && htmlSlideIndicator != '') {
            htmlSlideIndicator += `
            <div class="SFS__dot"></div>`
        } else {
            htmlSlideIndicator += `<div class="SFS__dot"></div>`
        }
    }

    // Render items
    htmlRender(htmlSlideContainer, slide)
    htmlRender(htmlSlideIndicator, indicator)

    // Slideshow
    function slideShow() {
        var slideElements = slide.children
        var indicatorElements = indicator.children
    
        for (var i = 0; i < data.length; i++) {
            if (!slideElements[i].classList.contains('hidden')) {
                slideElements[i].classList.add('hidden')
            }
            if (indicatorElements[i].classList.contains('active')) {
                indicatorElements[i].classList.remove('active')
            }
        }
        slideElements[slideIndex].classList.remove('hidden')
        indicatorElements[slideIndex].classList.add('active')
        if (slideIndex < data.length - 1) {
            slideIndex++
        } else {
            slideIndex = 0
        }
        setTimeout(slideShow, 3000)
    }

    slideShow()
}

export default slide