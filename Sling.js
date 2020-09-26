class Sling{
    constructor(bodyA, pointB, stiff, length) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: stiff,
            length: length
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.bodyA = bodyA;
        this.pointB = pointB;
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display() {
        if(this.sling.bodyA != null)
            strokeWeight(3);
            fill("black");
            line(200, 170, this.bodyA.position.x,this.bodyA.position.y);
    }
}