#2x^(2)+3 x-2
i = 0
bclicked = 0
atimes = 0
def interact(interval: number): #mostrar N numeros de la serie
    global i
    basic.clear_screen()
    i = 1
    while i < interval + 1:
        basic.show_string("" + str(funcio_recta(i)))
        basic.pause(100)
        basic.clear_screen()
        i += 1
def funcio_recta(n: number):
    if n == 0:
        return -2
    else:
        return 2*Math.pow(n, 2)+3*n -2
def numElements():#3, 12, 25, 42,funcion para que el usuario elija cuantos numeros de la seriq quiere mostrar
    global atimes, bclicked
    while bclicked < 1:
        if input.button_is_pressed(Button.A):
            basic.show_string("A")
            basic.clear_screen()
            atimes += 1
            basic.show_string("" + str(atimes))
        elif input.button_is_pressed(Button.B):
            basic.show_string("B")
            bclicked += 1
        basic.pause(50)
    basic.clear_screen()
    basic.show_string("Serie")
    interact(atimes)
def showIcon():
    basic.clear_screen()
    music.start_melody(music.built_in_melody(Melodies.FUNK),
        MelodyOptions.ONCE)
    for index in range(4):
        basic.show_icon(IconNames.SMALL_SQUARE)
        basic.pause(100)
        basic.show_icon(IconNames.SQUARE)
        basic.pause(100)
    basic.clear_screen()
    basic.show_string("Serie")
    basic.clear_screen()

def on_forever():
    global atimes, bclicked
    music.set_built_in_speaker_enabled(True)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.show_string("A nums B start")
    numElements()
    basic.pause(500)
basic.forever(on_forever)

