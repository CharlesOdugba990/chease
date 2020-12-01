class Chain{
    constructor(b,p){
        var options = {
            bodyA:b,
            pointB:p,
            length:500,
            stiffness:1
        }
        this.chain = Matter.Constraint.create(options) 
        //this.pointB = p
        World.add(world,this.chain)
    }
    Qc(){
    stroke(235)
    line(this.chain.bodyA.position.x,this,chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)        
    }
}