class Ship{
    constructor(x,y,l,shape){

        this.body = createSprite(x, y, 10, 10);
        //this.body.debug = true;
        this.health = 50;
        this.loc = [];

        this.time = 0;

        //keeps the one who hit it last
        this.lasthit = null;

        this.is_player = false;
        
        this.shape = shape;

        this.update = true;
        this.l = l;

        
        this.percent = ({
            circle: 0,
            rectangle: 0,
            triangle: 0
        });
    }

    display(){

        if(this.update === true){
            this.clear();
            this.update = false;
        }

        if(this.properties.length > 100){
            this.update = true;
            points += 1;
        }

        this.Update();

        this.body.setCollider("circle",0,0,this.properties.length);

        if(this.time <= 40){
            this.time += 1;
        }

        //tail{
            //adds player location to tail
            this.loc.push([this.body.x,this.body.y]);

            //Keeps the length of tail
            if(this.loc.length > this.properties.length){
                this.loc.splice(0,1);
            }

            //draws the tail
            for(var i = 0; i < this.loc.length - 1; i++){
                strokeWeight(i*2);
                line(this.loc[i][0], this.loc[i][1], this.loc[i+1][0], this.loc[i+1][1]);
            }
        //}
        
        if(this.shape === "circle"){
            push();
            stroke("green");
            if(this.is_player === true){
                stroke("red");
            }
            strokeWeight(1);
            noFill();
            ellipse(this.body.x, this.body.y, this.properties.length);
            pop();
        }
        else if(this.shape === "rectangle"){
            push();
            stroke("blue");
            if(this.is_player === true){
                stroke("red");
            }
            strokeWeight(1);
            noFill();
            rectMode(CENTER);
            rect(this.body.x, this.body.y, this.properties.length, this.properties.length);
            pop();
        }
        else if(this.shape === "triangle"){
            push();
            stroke("yellow");
            if(this.is_player === true){
                stroke("red");
            }
            strokeWeight(1);
            noFill();
            triangle(this.body.x - this.properties.length/2, 
                this.body.y + this.properties.length/2, 
                this.body.x, 
                this.body.y - this.properties.length/2, 
                this.body.x + this.properties.length/2, 
                this.body.y + this.properties.length/2);
            pop();
        }

        //keeps maxSpeed
        if(this.body.velocityX > this.properties.maxSpeed){
            this.body.velocityX = this.properties.maxSpeed;
        }
        else if(this.body.velocityX < -this.properties.maxSpeed){
            this.body.velocityX = -this.properties.maxSpeed;
        }

        if(this.body.velocityY > this.properties.maxSpeed){
            this.body.velocityY = this.properties.maxSpeed;
        }
        else if(this.body.velocityY < -this.properties.maxSpeed){
            this.body.velocityY = -this.properties.maxSpeed;
        }

        if(this.is_player != false){
            //slowly slows down player
            //x
            if(this.body.velocityX > 0){
                this.body.velocityX -= 0.5;
            }
            else if(this.body.velocityX < 0){
                this.body.velocityX += 0.5;
            }
            //y
            if(this.body.velocityY > 0){
                this.body.velocityY -= 0.5;
            }
            else if(this.body.velocityY < 0){
                this.body.velocityY += 0.5;
            }
        }
    }

    GetTarget(){
        this.target = this.lasthit;
    }

    Update(){
        if (this.percent.triangle >= 100){
            this.update = true;
            this.shape = "triangle";
            points += 1;
        }
        else if(this.percent.rectangle >= 100){
            this.update = true;
            this.shape = "rectangle";
            points += 1;
        }
        else if(this.percent.circle >= 100){
            this.update = true;
            this.shape = "circle";
            points += 1;
        }

        
    }

    clear(){
        this.loc = [];
        this.percent = ({
            circle: 0,
            rectangle: 0,
            triangle: 0
        });

        if(this.shape === "circle" || this.shape === 1){
            this.properties = ({
                maxSpeed: 7,
                length: this.l,
                defence: 20,
                damage: 50,
                range: 250,
                homing: true
            });
            
            this.shape = "circle";
        }
        else if(this.shape === "rectangle" || this.shape === 2){
            this.properties = ({
                maxSpeed: 5,
                length: this.l,
                defence: 10,
                damage: 1000,
                range: 500,
                homing: false
            });

            this.shape = "rectangle";
        }
        else if(this.shape === "triangle" || this.shape === 3){
            this.properties = ({
                maxSpeed: 9,
                length: this.l,
                defence: 50,
                damage: 20,
                range: 20,
                homing: false
            });
            
            this.shape = "triangle";
        }
    }
}