function dropDown(strigger, dropDownItem, event = 'mousemove', display = 'block') {
    strigger.addEventListener(event, function() {
        dropDownItem.style.display = display
    })
    strigger.addEventListener('mouseleave', function() {
        dropDownItem.style.display = 'none'
        dropDownItem.addEventListener(event, function() {
            dropDownItem.style.display = display
        })
        dropDownItem.addEventListener('mouseleave', function() {
            dropDownItem.style.display = 'none'
        })
    })
}

export default dropDown