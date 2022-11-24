function hideWhenScrollUp(selector) {
    var lastScrollY = 0
    window.addEventListener('touchmove', function () {
        var newscrollY
        if (Math.floor(window.scrollY) != lastScrollY) {
            newscrollY = Math.floor(window.scrollY)
        }   else {
            return
        }
        
        if (newscrollY < lastScrollY) {
            if (!selector.classList.contains("hidden")) {
                selector.classList.add('hidden')
            }
        } else {
            if (selector.classList.contains("hidden")) {
                selector.classList.remove('hidden')
            }
        }

        lastScrollY = newscrollY
    })
}

export default hideWhenScrollUp