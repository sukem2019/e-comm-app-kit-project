import htmlRender from "./render.js"

function showCategoryList(categoryList, selector) {
    var htmlCategory = ""
    for (var i = 0; i < categoryList.length; i++) {
        if (selector) {
            htmlCategory += `
            <div class="category__item">
                <div class="category__icon">
                    ${categoryList[i].img}
                </div>
                <div class="category__description normal-regular-caption">${categoryList[i].name}</div>
            </div>
            `
        }
    }

    htmlRender(htmlCategory, selector)
}

export default showCategoryList