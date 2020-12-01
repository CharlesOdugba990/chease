class Ball{
    constructor(x,y){
    var options = {
        friction:1.0,
        density:1
    }
    this.ball = Bodies.circle(x ,y ,40,options)
    this.r = 40
    World.add(world,this.ball)
    }
    clown(){
    push()
    rotate(this.ball.angle)
    translate(this.ball.position.x,this.ball.position.y)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()   
    }
}