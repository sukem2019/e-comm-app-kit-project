function htmlRender(htmlString, selector) {
    if (selector) {
        selector.innerHTML = htmlString
    } 
}

export default htmlRender