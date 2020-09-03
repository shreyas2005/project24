class Paper{
    constructor(x,y,radius){
        var option={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.radius=radius;
        World.add(world,this.body);
    this.image=loadImage("paper.png");
    }
    display(){
        
        var pos =this.body.position;
       // var angle=this.body.angle;
       push();
        translate(pos.x,pos.y)
//ellipseMode(this.radius);
       // ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}