class bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.8
        }
        this.body=Bodies.circle(x,y,25,options);
          World.add(world,this.body);

          console.log(this.body);
    }
    display(){
        var paperPos=this.body.position;
        
        push()
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER);
        fill("pink");
        ellipse(0,0,25,25)
        pop()
        
    }

}