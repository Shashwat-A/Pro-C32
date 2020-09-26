class Polygan {
    constructor(x,y) {
        var options= {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,20, options);
        this.image = loadImage("polygan-min.jpg");
    
        World.add(world,this.body);
    }
 
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(rgb(0, 153, 51));
        ellipse(pos.x,pos.y,20,20);
    }
}