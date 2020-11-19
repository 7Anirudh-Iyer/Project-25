class ball1{
    constructor(x,y){
        var json={
            restitution: 0.3,
            friction: 1.0,
            density: 1.2
        }
        this.Paper1=Bodies.rectangle(x,y,50,50,json)
        this.image=loadImage("paper.jpg")
        World.add(world,this.Paper1)
    }
    display(){
        var a=this.Paper1.position
        var ang=this.Paper1.angle
        push()
        translate(a.x,a.y)
        rotate(ang)
        imageMode(CENTER)
        image(this.image,0,0,30,30)
        pop()
    }
}



