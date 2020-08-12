input.onButtonPressed(Button.A, function () {
    strip.setBrightness(255)
    basic.showNumber(input.temperature() % 10)
    for (let index = 0; index <= 4; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
let range = strip.range(0, (input.temperature() - input.temperature() % 10) / 10)
