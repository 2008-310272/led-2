input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    led.setBrightness(0)
})
input.onButtonPressed(Button.AB, function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(Y, 4 - X, 255)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    led.setBrightness(255)
})
basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(4 - X, Y, 30)
            basic.pause(100)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(Y, 4 - X)
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(X, 4 - Y, 30)
            basic.pause(100)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(4 - Y, X)
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(4 - Y, X, 30)
            basic.pause(100)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(X, 4 - Y)
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plotBrightness(Y, 4 - X, 30)
            basic.pause(100)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(4 - X, Y)
            basic.pause(100)
        }
    }
})
