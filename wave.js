
class wave {
    constructor(n, shift, amp, c) {

        // All sine waves need an angle!
        this.angle = 0
        // our average y. It's useful as the constant in the way we normally
        // write a sine or cosine formula: amplitude * sin|cos(ω(x+c)) +
        // average y. You can see average y in there!
        this.average = 0
        // If we want n=1, we would want the period to be 2 times our width,
        // because then we would get nodes at both endpoints but not at
        // anything else, and it divides by n.
        this.T = 2*width/n
        this.n = n
        // what about c? That's the phase shift.
        this.shift = shift
        // All sinusoidal waves have an amplitude!
        this.amp = amp
        // And we should also include a color.
        this.c = c
    }

    update(toTheRight) {
        // We should update angle.
        if (toTheRight) {
            this.angle += 1
        } else {
            this.angle -= 1
        }
    }

    show() {
        // We're going to be drawing a sine wave, so we need beginShape() and
        // endShape().
        beginShape()
        stroke(this.c)
        noFill()
        for (let i = 0; i < width; i++) {
            // here, we're going to be drawing our sine wave with all the
            // properties.
            vertex(i, this.getValue(i) + this.average)
        }
        endShape()
    }

    getValue(t) {
        return this.amp*sin(TAU/this.T * (this.angle + map(t, 0, width, 0,
                this.T*this.n) + this.shift))
    }
}


