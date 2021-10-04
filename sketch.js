/*
waveforms
by Cody
at October 04, 2021
inspired by Zz and his physics video
version comments:
    Wave constructor and show
    Wave get value and update
    wave sum
    wave pulse constructor and show
    wave pulse rigid and non-rigid boundaries
    string class and wave interference
 */
let font
let hoggy
let n

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    n = random(-7, 7)
    hoggy = new wave(n, 0, 100)
    console.log(n)
}
function draw() {
    background(209, 80, 30)
    hoggy.show()
    stroke(90, 20, 60)
    line(hoggy.shift, hoggy.average + hoggy.amp + 10,
        hoggy.shift + abs(hoggy.T)/2, hoggy.average + hoggy.amp + 10)
    line(hoggy.shift, hoggy.average + hoggy.amp + 10,
        hoggy.shift, hoggy.average)
    line(hoggy.shift + abs(hoggy.T)/2, hoggy.average + hoggy.amp + 10,
        hoggy.shift + abs(hoggy.T)/2, hoggy.average)
    line(hoggy.shift, hoggy.average,
        hoggy.shift + abs(hoggy.T)/2, hoggy.average)
}