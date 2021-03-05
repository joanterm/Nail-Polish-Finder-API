//debouncing === improving performance
const genericDebounce = (callback) => {
    let timeOut;
    return(...arguments) => {
        if (timeOut) {  //w/o this if we type in 5 values data will be pulled behind scenes 5 times, w/ it it will only get pulled once === good performance
            clearTimeout(timeOut)
        }
        timeOut = setTimeout(() => {
            callback.apply(null, arguments)
        }, 1000)
    }
}