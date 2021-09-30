basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(4 - X, Y)
            basic.pause(100)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(Y, 4 - X)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
