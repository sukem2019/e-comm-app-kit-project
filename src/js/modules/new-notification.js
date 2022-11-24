function showNewNotification(isNewNotification = false, selector) {
    if (isNewNotification) {
        if(selector.classList.contains('hidden')) {
            selector.classList.remove('hidden')
        }
    } else {
        if(!selector.classList.contains('hidden')) {
            selector.classList.add('hidden')
        }
    }
}

export default showNewNotification