class Boxy{
    constructor(x,y,width,height){
        this.box=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        this.image=loadImage("dustbin.png")
    }
    display(){
        var pos=this.box.position
        var ang=this.box.angle
        push()
        translate(pos.x,pos.y)
        rotate(ang)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()

    }
}

class Box{
    constructor(x,y,width,height){

        var b={
            isStatic: true,
            visible: false
        }
        this.box=Bodies.rectangle(x,y,width,height,b)
        this.box.visible=false
        this.width=width
        this.height=height
        World.add(world,this.box)
    }
    display(){
        var pos=this.box.position
        var ang=this.box.angle
        push()
        translate(pos.x,pos.y)
        rotate(ang)
        fill("blue")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()

    }
}