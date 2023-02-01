// 2x^(2)+3 x-2
let i = 0
let bclicked = 0
let atimes = 0
function interact(interval: number) {
    // mostrar N numeros de la serie
    
    basic.clearScreen()
    i = 1
    while (i < interval + 1) {
        basic.showString("" + ("" + funcio_recta(i)))
        basic.pause(100)
        basic.clearScreen()
        i += 1
    }
}

function funcio_recta(n: number): number {
    if (n == 0) {
        return -2
    } else {
        return 2 * Math.pow(n, 2) + 3 * n - 2
    }
    
}

function numElements() {
    // 3, 12, 25, 42,funcion para que el usuario elija cuantos numeros de la seriq quiere mostrar
    
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            atimes += 1
            basic.showString("" + ("" + atimes))
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            bclicked += 1
        }
        
        basic.pause(50)
    }
    basic.clearScreen()
    basic.showString("Serie")
    interact(atimes)
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.showString("Serie")
    basic.clearScreen()
}

basic.forever(function on_forever() {
    
    music.setBuiltInSpeakerEnabled(true)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.showString("A nums B start")
    numElements()
    basic.pause(500)
})
