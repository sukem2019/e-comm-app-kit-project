function activeOnClick(elements) {
    if(elements) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].onclick = function(event) {
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].classList.contains('active')) {
                        elements[i].classList.remove('active')
                    }
                }
                event.currentTarget.classList.add('active')
            }
        }
    }
}

export default activeOnClick