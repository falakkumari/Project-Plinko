class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            isStatic: true
        }
        this.r = 10
        this.body = Bodies.circle(x, y, 10, options)
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("green");
        ellipse(0, 0, this.r, this.r);
    }
};