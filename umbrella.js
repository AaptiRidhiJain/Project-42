class Umbrella {
    constructor(x,y,radius){
         var options = {
              isStatic: true,
              restitution: 0.5
         }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
        this.body = Bodies.rectangle(this.x,this.y,this.r,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(angle);
        rotate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}
