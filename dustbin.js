class bx{
    constructor(x,y,width,height,isStatic){
     var op={
    
        isStatic : true
     }
        this.body=Bodies.rectangle(x,y,width,height,isStatic);
        this.width=width;
        this.height=height;
        this.isStatic=isStatic;
        World.add(world,this.body);
        this.image=loadImage("dustbin.png");
    }
    display(){
    var pos=this.body.position;
    push();
   translate(pos.x,pos.y);
    //fill("red");
    //rect(pos.x,pos.y,this.width,this.height);
    imageMode(CENTER);
    image(this.image,0,0,100,100);
    pop();
    }
    
    
    }