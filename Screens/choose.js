function Choose(){
    background(240);
    camera.x = 387.5;
    camera.y = 250;
    load = true;

    for(var i = 1; i < Button.length; i++){
        Button[i].visible = true
    }
    drawSprites();

    noStroke()
    rectMode(CENTER);


    fill("yellow");
    triangle((width/2 - 100) - 30/2, 
        200 + 30/2, 
        (width/2 - 100), 
        200 - 30/2, 
        (width/2 - 100) + 30/2, 
        200 + 30/2);
    fill("green");
    ellipse(width/2 + 100,200, 30);
    fill("blue");
    rect(width/2,200,30,30);

    if(mousePressedOver(Button[1]) && Button[1].visible != false){
        Button[1].visible = false;
        type = "triangle";
    }
    else if(mousePressedOver(Button[2]) && Button[2].visible != false){
        Button[2].visible = false;
        type = "rectangle";
    }
    else if(mousePressedOver(Button[3]) && Button[3].visible != false){
        Button[3].visible = false;
        type = "circle";
    }

    if(type != 1 && tutorial === false){
        player.shape = type;
        gamestate = "game";
    }
    else if(type != 1){
        gamestate = "tutorial";
    }

    
}