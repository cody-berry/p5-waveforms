
class wave {
    constructor(n, shift, amp) {

        // All sine waves need an angle!
        this.angle = 0
        // our average y. It's useful as the constant in the way we normally
        // write a sine or cosine formula: amplitude * sin|cos(ω(x+c)) +
        // average y. You can see average y in there!
        this.average = height/2
        // If we want n=1, we would want the period to be 2 times our width,
        // because then we would get nodes at both endpoints but not at
        // anything else, and it divides by n.
        this.T = 2*width/n
        this.n = n
        // what about c? That's the phase shift.
        this.shift = shift
        // All sinusoidal waves have an amplitude!
        this.amp = amp
    }

    show() {
        // We should update angle (I don't have an update() yet, so I'll
        // need to do it in show()).
        this.angle
        // We're going to be drawing a sine wave, so we need beginShape() and
        // endShape().
        beginShape()
        stroke(0, 0, 100)
        noFill()
        for (let i = 0; i < width; i++) {
            // here, we're going to be drawing our sine wave with all the
            // properties.
            vertex(i, this.amp*
                sin(TAU/this.T * (this.angle + map(i, 0, width, 0, this.T*this.n) + this.shift)) + this.average)
        }
        endShape()
    }
}


