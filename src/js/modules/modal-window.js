function modalWindow(strigger, modalElement) {
    var modalWindowContainer = modalElement.children
    var closeButton = modalElement.querySelector('.close-button')
    modalWindowContainer[0].addEventListener('click', function(event) {
        event.stopPropagation()
    })
    strigger.addEventListener('click', function() {
        if (modalElement.classList.contains("hidden"))
            modalElement.classList.remove('hidden')
    })
    closeButton.addEventListener('click', function() {
        if (!modalElement.classList.contains("hidden"))
            modalElement.classList.add('hidden')
    })
    modalElement.addEventListener('click', function() {
        if (!modalElement.classList.contains("hidden"))
            modalElement.classList.add('hidden')
    })
}

export default modalWindow