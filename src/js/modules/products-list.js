import htmlRender from "./render.js"

function showProducts(productList, selector, orderKey, columnClass) {
    var htmlProductItem = ''
    for (var i = 0; i < productList.length; i++) {
        if (selector) {
            htmlProductItem += `
            <div class="${columnClass}">
                <div class="product-item">
                    <div class="product-img">
                        <img src="${productList[i].img()}" alt="RP${productList[i][orderKey]} img">
                    </div>
                    <div class="product-info">
                        <h6 class="product-description">${productList[i].name}</h6>
                        <div class="product-rate">
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"/>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"/>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"/>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"/>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"/>
                            </svg>
                        </div>
                        <p class="product-price normal-bold-body">$${productList[i].productPrice()}</p>
                        <div class="sale-info">
                            <div class="initial-price normal-regular-line-caption">$${productList[i].initialPrice}</div>
                            <div class="sale-percentage normal-bold-caption">${productList[i].salePercentage}% Off</div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    
    var htmlProducts = `
        <div class="row">
                ${htmlProductItem}
        </div>
    `
    htmlRender(htmlProducts, selector)

    var productRates = selector.querySelectorAll('.product-rate')

    for (var i = 0; i < productRates.length; i++) {
        for (var j = 0; j < 5; j++) {
            if (productList[i].starRate > j) {
                productRates[i].children[j].classList.add('star-checked')
            }
        }
    }
}

export default showProducts