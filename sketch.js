/*
waveforms
by Cody
at October 04, 2021
inspired by Zz and his physics video
version comments:
.   wave constructor and show
.   wave get value and update
.   wave sum
    wave pulse constructor and show
    wave pulse rigid and non-rigid boundaries
    string class and wave interference
 */
let font
let hoggy
let seahorse
let n

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    n = int(random(-7, 7))
    if (n !== 0) {
        hoggy = new wave(n, 0, 75, color(0, 100, 80))
        seahorse = new wave(n, 0, 75, color(210, 100, 80))
    } else {
        hoggy = new wave(0.01, 0, 75, color(0, 100, 80))
        seahorse = new wave(0.01, 0, 75, color(210, 100, 80))
    }
    console.log(n)
}
function draw() {
    background(209, 80, 30)
    translate(0, height/2)
    hoggy.show()
    hoggy.update(true)
    seahorse.show()
    seahorse.update(false)
    // our points could be spaced out, so we should use beginShape() and
    // endShape().
    stroke(0, 0, 100)
    beginShape()
    for (let i = 0; i < width; i++) {
        vertex(i, hoggy.getValue(i) + seahorse.getValue(i))
    }
    endShape()
}