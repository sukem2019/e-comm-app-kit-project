import htmlRender from "./render.js"

function showSaleProducts(saleCode, saleList, selector) {
    var htmlSale = ''
    for (var i = 0; i < saleList.length; i++) {
        if (selector) {
            htmlSale += `
            <div class="sale-item">
                <div class="product-img">
                    <img src="${saleList[i].img()}" alt="MS6 img">                    
                </div>
                <h6 class="product-description">${saleCode} - ${saleList[i].name}</h6>
                <p class="product-price normal-bold-body">$${saleList[i].productPrice()}</p>
                <div class="sale-info">
                    <div class="initial-price normal-regular-line-caption">$${saleList[i].initialPrice}</div>
                    <div class="sale-percentage normal-bold-caption">${saleList[i].salePercentage}% Off</div>
                </div>
            </div>
            `
        }
    }
    htmlRender(htmlSale, selector)
}

export default showSaleProducts