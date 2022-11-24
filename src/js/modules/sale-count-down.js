import htmlRender from "./render.js"

function saleCountDown(endTimeString, hh, mm, ss) {
    var endTime = new Date(endTimeString).getTime()
    var hour = '00'
    var minute = '00'
    var second = '00'
    
    function timeRender() {
        var now = new Date().getTime()
        var period = endTime - now
        if (period > 0) {
            hour = period / (1000 * 60 * 60) < 10 ? `0${Math.floor(period / (1000 * 60 * 60))}` : `${Math.floor(period / (1000 * 60 * 60))}`
            minute = period % (1000 * 60 * 60) / (1000 * 60) < 10 ? `0${Math.floor(period % (1000 * 60 * 60) / (1000 * 60))}` : `${Math.floor(period % (1000 * 60 * 60) / (1000 * 60))}`
            second = period % (1000 * 60) / 1000 < 10 ? `0${Math.floor(period % (1000 * 60) / 1000)}` : `${Math.floor(period % (1000 * 60) / 1000)}`
        } else {
            clearTimeout(setTimeout(timeRender, 1000))
        }
        // Render time
        htmlRender(hour, hh)
        htmlRender(minute, mm)
        htmlRender(second, ss)
        setTimeout(timeRender, 1000);
    }

    timeRender()
}

export default saleCountDown