class Can {
    constructor(x,y,width,height){
        var options = {
            'friction': 1.5,
            'isStatic': false,
            'restitution': 0.8,
            'denstity': 1.8
        }
        this.body = Bodies.rectangle(x,y, width,height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        var pos = this.body.position;
        if(this.body.speed > 3){
            this.visibility = this.visibility - 0.5
            World.remove(world, this.body);
        }
        if(this.body.speed < 3 ) {
            push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        fill("red");
        tint(255, this.visibility);
        rect(0, 0, this.width, this.height);
        pop();
        }
        
    }

    score() {
        if(this.visibility < 0 && this.visibility > -105) {
            score++;
        }
    }
}